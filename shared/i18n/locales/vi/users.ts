const users = {
  title: 'Người dùng',
  subtitle: 'Quản lý các thành viên trong nhóm và phân quyền tài khoản.',
  allUsers: 'Tất cả người dùng',
  manageTeam: 'Quản lý thành viên trong nhóm',
  searchPlaceholder: 'Tìm kiếm người dùng...',
  refresh: 'Làm mới',
  addUser: 'Thêm người dùng',
  createTitle: 'Tạo người dùng mới',
  createDescription: 'Thêm một người dùng mới vào hệ thống.',
  name: 'Họ và tên',
  namePlaceholder: 'Nhập họ và tên người dùng',
  email: 'Email',
  emailPlaceholder: 'Nhập địa chỉ email',
  role: 'Vai trò',
  actions: 'Thao tác',
  cancel: 'Hủy',
  createButton: 'Tạo người dùng',
  noUsersFound: 'Không tìm thấy người dùng nào.',
  totalUsers: 'Tổng cộng: {{count}} người dùng',
  fetching: 'Đang tải...',
  roles: {
    admin: 'Quản trị viên',
    user: 'Người dùng',
    guest: 'Khách',
  },
} as const;

export default users;
