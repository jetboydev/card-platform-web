const users = {
  title: 'Users',
  subtitle: 'Manage your team members and their account permissions here.',
  allUsers: 'All Users',
  manageTeam: 'Manage your team members',
  searchPlaceholder: 'Search users...',
  refresh: 'Refresh',
  addUser: 'Add User',
  createTitle: 'Create New User',
  createDescription: 'Add a new user to the system.',
  name: 'Name',
  namePlaceholder: 'Enter user name',
  email: 'Email',
  emailPlaceholder: 'Enter email address',
  role: 'Role',
  actions: 'Actions',
  cancel: 'Cancel',
  createButton: 'Create User',
  noUsersFound: 'No users found.',
  totalUsers: 'Total: {{count}} users',
  fetching: 'Fetching...',
  roles: {
    admin: 'Admin',
    user: 'User',
    guest: 'Guest',
  },
} as const;

export default users;
