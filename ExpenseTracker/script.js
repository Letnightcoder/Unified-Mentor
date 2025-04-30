 const form = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');
    const totalIncomeEl = document.getElementById('total-income');
    const totalExpenseEl = document.getElementById('total-expense');
    const netBalanceEl = document.getElementById('net-balance');
    const filterCategory = document.getElementById('filter-category');
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    function updateLocalStorage() {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    function renderTransactions() {
      transactionList.innerHTML = '';
      const filtered = filterCategory.value === 'all' 
        ? transactions 
        : transactions.filter(t => t.category === filterCategory.value);
      filtered.forEach((t, i) => {
        const row = document.createElement('tr');
        row.className = t.type;
        row.innerHTML = `
          <td>${t.date}</td>
          <td>${t.description}</td>
          <td>${t.category}</td>
          <td>₹${t.amount}</td>
          <td>${t.type}</td>
          <td><button onclick="deleteTransaction(${i})">Delete</button></td>
        `;
        transactionList.appendChild(row);
      });
      updateSummary();
      updateChart();
    }

    function updateSummary() {
      const income = transactions.filter(t => t.type === 'income')
                                 .reduce((sum, t) => sum + t.amount, 0);
      const expense = transactions.filter(t => t.type === 'expense')
                                  .reduce((sum, t) => sum + t.amount, 0);
      totalIncomeEl.textContent = `₹${income}`;
      totalExpenseEl.textContent = `₹${expense}`;
      netBalanceEl.textContent = `₹${income - expense}`;
    }

    function deleteTransaction(index) {
      transactions.splice(index, 1);
      updateLocalStorage();
      renderTransactions();
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const date = document.getElementById('date').value;
      const description = document.getElementById('description').value;
      const category = document.getElementById('category').value;
      const amount = parseFloat(document.getElementById('amount').value);
      const type = document.getElementById('type').value;

      if (!date || !description || !category || isNaN(amount) || !type) {
        alert('Please fill all fields correctly!');
        return;
      }

      transactions.push({ date, description, category, amount, type });
      updateLocalStorage();
      form.reset();
      renderTransactions();
    });

    filterCategory.addEventListener('change', renderTransactions);

    // Pie Chart
    let chart;
    function updateChart() {
      const ctx = document.getElementById('expense-chart').getContext('2d');
      const expenseData = transactions.filter(t => t.type === 'expense');
      const categoryTotals = {};
      expenseData.forEach(t => {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      });

      const data = {
        labels: Object.keys(categoryTotals),
        datasets: [{
          label: 'Expenses by Category',
          data: Object.values(categoryTotals),
          backgroundColor: ['#f39c12','#e74c3c','#8e44ad','#3498db','#2ecc71','#95a5a6'],
        }]
      };

      if (chart) chart.destroy();
      chart = new Chart(ctx, {
        type: 'pie',
        data,
      });
    }

    renderTransactions();
