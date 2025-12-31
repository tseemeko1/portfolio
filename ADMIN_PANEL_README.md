# Admin Panel Documentation

## Overview
The admin panel allows you to view and manage all RFQ (Request for Quote) submissions from your portfolio website. All submissions are stored locally in the browser's localStorage.

## Accessing the Admin Panel

1. **Navigate to the admin page:**
   - Local development: `http://localhost:3000/admin`
   - Production: `https://yourdomain.com/admin`

2. **First Time Setup:**
   - Enter any password you want to use
   - This password will be set as your admin password
   - Remember this password - you'll need it to access the panel

3. **Subsequent Logins:**
   - Enter the password you set during first-time setup
   - You'll stay logged in until you click "Logout"

## Features

### View RFQs
- See all quote requests in a list view
- Click on any RFQ to view full details
- See submission date, contact info, project details, budget, and timeline

### Search & Filter
- **Search:** Search across all fields (name, email, message, etc.)
- **Filter:** Filter by project type (Web Development, Data Analytics, etc.)

### Manage RFQs
- **Delete Individual:** Click the trash icon on any RFQ card
- **Delete All:** Use "Clear All" button to remove all RFQs
- **Export:** Export all RFQs to CSV format for backup or analysis

### Email Integration
- Click "Reply via Email" to open your email client with pre-filled recipient and subject

## Security Considerations

### Current Implementation (Client-Side Only)
⚠️ **Important:** This is a client-side only solution suitable for:
- Personal portfolios
- Low-traffic websites
- Development/testing environments

### Security Limitations:
1. **Password Storage:** Passwords are hashed but stored in localStorage (not cryptographically secure)
2. **Data Storage:** All RFQs are stored in browser localStorage (visible to anyone with browser access)
3. **No Server-Side Validation:** No backend authentication
4. **Browser Access:** Anyone with access to the browser can view localStorage data

### For Production Use:
For a production environment with real security needs, consider:

1. **Backend API:**
   - Node.js/Express server
   - Database (MongoDB, PostgreSQL, etc.)
   - JWT authentication
   - Encrypted password storage (bcrypt)

2. **Hosting Options:**
   - Firebase/Firestore
   - Supabase
   - AWS Lambda + DynamoDB
   - Vercel Serverless Functions

3. **Security Best Practices:**
   - HTTPS only
   - Rate limiting
   - CSRF protection
   - Input validation
   - SQL injection prevention

## Data Storage

### LocalStorage Structure
- **Key:** `portfolio_rfq_submissions`
- **Format:** JSON array of RFQ objects
- **Location:** Browser's localStorage (client-side only)

### RFQ Object Structure
```javascript
{
  id: "timestamp",
  timestamp: "ISO date string",
  name: "string",
  email: "string",
  company: "string (optional)",
  projectType: "string",
  budget: "string",
  timeline: "string",
  message: "string"
}
```

## Troubleshooting

### Can't Access Admin Panel
- Check the URL: `/admin` (not `/admin/`)
- Clear browser cache and localStorage
- Try in incognito/private mode

### Password Not Working
- If you forgot your password, clear localStorage:
  ```javascript
  localStorage.clear();
  ```
  Then set a new password on next login

### RFQs Not Showing
- Check browser console for errors
- Verify localStorage is enabled in your browser
- Check if data exists: `localStorage.getItem('portfolio_rfq_submissions')`

### Export Not Working
- Ensure browser allows downloads
- Check browser console for errors
- Try a different browser

## Development Notes

### Files Structure
```
src/
├── components/
│   ├── AdminLogin.js      # Login page
│   └── AdminPanel.js      # Main admin interface
├── pages/
│   └── Admin.js           # Admin route wrapper
├── utils/
│   └── rfqStorage.js      # localStorage utilities
└── App.js                 # Routing setup
```

### Adding New Features
To extend the admin panel:
1. Update `rfqStorage.js` for new storage operations
2. Modify `AdminPanel.js` for UI changes
3. Update `Contact.js` to save additional fields

## Support

For issues or questions, check:
- Browser console for errors
- Network tab for failed requests
- localStorage in DevTools Application tab

