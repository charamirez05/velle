# Velle

### stepping forward by one's own will - volunteer engagements all in one point

The starting features of Velle are as follows:

- User Registration as volunteer/organizer or both
- User log-in
- Creating a volunteer event
- Updating details of a volunteer event
- View all volunteer events
- View one volunteer event
- Delete/Cancel volunteer event
  - I plan to make it a soft delete so that it will be archived if I can do it.
- Search volunteer by title

As of May 29, 2024, I have implemented the following features:

- Register user
  - Supabase Magic Links for account verification (has a limit of 3 per hour, so I can only register limited users)
- Sign-in user
  - with the user data stored in a Zustand store
- Update user information
