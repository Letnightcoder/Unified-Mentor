# Expense Tracker

A web-based expense tracking application that helps users manage their income and expenses with visual analytics.

![Expense Tracker](https://github.com/user-attachments/assets/cf11eeaf-0b87-4ca8-a2e6-bff6ef73ad3c)


## Features

- Add and track income/expense transactions
- Categorize transactions
- Filter transactions by category
- Visual summary of total income, expenses and balance
- Pie chart visualization of expenses by category
- Persistent storage using localStorage
- Responsive design for mobile devices

## How to Use

1. Open index.html in a web browser
2. Add transactions using the form:
   - Select date
   - Enter description
   - Choose category
   - Enter amount
   - Select transaction type (income/expense)
   - Click "Add" button

3. View your financial summary at the top:
   - Total Income
   - Total Expenses
   - Net Balance

4. Filter transactions by category using the dropdown
5. View expense breakdown in the pie chart
6. Delete transactions using the "Delete" button in the table

## Code Structure

### HTML (`index.html`)
- Main container with form for adding transactions
- Summary section showing totals
- Transaction table
- Pie chart canvas

### CSS (`styles.css`)
- Responsive grid layout
- Mobile-friendly design
- Color coding for income/expense entries
- Flexible form layout

### JavaScript (`script.js`)
Key functions:
- `renderTransactions()`: Updates transaction list display
- `updateSummary()`: Calculates and shows financial totals
- `updateChart()`: Generates pie chart visualization
- `updateLocalStorage()`: Persists data to localStorage
- `deleteTransaction()`: Removes transactions

### Data Storage
- Uses browser's localStorage
- Transactions stored as JSON array
- Data persists between sessions

### Transaction Object Structure
```javascript
{
  date: "YYYY-MM-DD",
  description: "string",
  category: "string",
  amount: number,
  type: "income" | "expense"
}
```

## Browser Support

- Works in all modern browsers
- Requires JavaScript enabled
- Requires localStorage support

## Dependencies

- Chart.js for pie chart visualization

## Development

To modify the application:
1. Edit HTML for structure changes
2. Modify CSS for styling updates
3. Update JavaScript for functionality changes
4. Test in browser after changes
