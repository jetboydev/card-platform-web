import {
  Zap,
  Shield,
  Users,
  Target,
  Rocket,
  Heart,
  Building2,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Share2,
  FileCheck,
  UserCheck,
  Eye,
  Database,
  Lock,
  HelpCircle,
  ExternalLink,
  Book,
  MessageCircle,
  FileText,
  Ban,
  Gavel,
  DollarSign,
  RefreshCw,
  AlertCircle,
  UserX,
  Languages,
  Mic,
  Camera,
  Sparkles,
  Code2,
} from 'lucide-react';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@/components/icons/social-icons';
export const featuresMockHome = [
  {
    icon: Languages,
    title: 'Đa ngôn ngữ',
    description: 'Dịch qua lại giữa nhiều ngôn ngữ phổ biến, cập nhật và mở rộng liên tục',
  },
  {
    icon: Mic,
    title: 'Dịch giọng nói',
    description: 'Nói và nghe bản dịch tức thời, phù hợp cho hội thoại và du lịch',
  },
  {
    icon: Camera,
    title: 'Dịch qua camera',
    description: 'Quét văn bản bằng camera và nhận bản dịch ngay trên màn hình',
  },
  {
    icon: Shield,
    title: 'Bảo mật dữ liệu',
    description: 'Bảo vệ nội dung và dữ liệu người dùng với các biện pháp bảo mật phù hợp',
  },
];

export const valuesMockAbout = [
  {
    icon: Target,
    title: 'Tập trung khách hàng',
    description: 'Đặt nhu cầu và trải nghiệm khách hàng lên hàng đầu trong mọi quyết định',
  },
  {
    icon: Rocket,
    title: 'Đổi mới sáng tạo',
    description: 'Không ngừng nghiên cứu và áp dụng công nghệ mới để tạo ra giá trị',
  },
  {
    icon: Heart,
    title: 'Tận tâm chất lượng',
    description: 'Cam kết mang đến sản phẩm và dịch vụ với tiêu chuẩn cao nhất',
  },
  {
    icon: Users,
    title: 'Hợp tác phát triển',
    description: 'Xây dựng môi trường làm việc đoàn kết, cùng nhau phát triển',
  },
];

// TODO: xác nhận lại năm thành lập, số liệu người dùng thực tế trước khi đưa lên bản production.
export const milestonesMockAbout = [
  {
    year: '2026 (Q1)',
    title: 'Khởi động dự án',
    description: 'Nghiên cứu mô hình AI dịch thuật và bắt đầu xây dựng nền tảng TranX',
    highlight: false,
  },
  {
    year: '2026 (Q2)',
    title: 'Chính thức ra mắt sản phẩm',
    description: 'Phát hành nền tảng dịch thuật TranX và mở cổng Translation API cho doanh nghiệp',
    highlight: true,
  },
  {
    year: '2026 (Q4)',
    title: 'Mở rộng hệ sinh thái & Ngôn ngữ',
    description: 'Hỗ trợ hơn 50+ ngôn ngữ và tối ưu hóa mô hình AI cho các lĩnh vực chuyên sâu',
    highlight: false,
  },
  {
    year: '2027+',
    title: 'Vươn tầm quốc tế',
    description: 'Phát triển thị trường toàn cầu và dẫn đầu giải pháp dịch thuật AI thế hệ mới',
    highlight: false,
  },
];

export const teamMockAbout = [
  {
    name: 'Leadership Team',
    description: 'Đội ngũ lãnh đạo giàu kinh nghiệm trong công nghệ và kinh doanh',
    icon: Building2,
  },
  {
    name: 'Development Team',
    description: 'Đội ngũ kỹ thuật tài năng với chuyên môn cao',
    icon: Rocket,
  },
  {
    name: 'Product Team',
    description: 'Chuyên gia sản phẩm hiểu sâu về nhu cầu người dùng',
    icon: Target,
  },
  {
    name: 'Growth Team',
    description: 'Đội ngũ tăng trưởng sáng tạo và năng động',
    icon: TrendingUp,
  },
];

export const contactMethodsMockContact = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Gửi email cho chúng tôi',
    value: 'support@tranx.vn',
    action: 'mailto:support@tranx.vn',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Hotline',
    description: 'Gọi điện trực tiếp',
    value: '1900 xxxx',
    action: 'tel:1900xxxx',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Zalo OA',
    description: 'Chat qua Zalo Official',
    value: '@tranx.vn',
    action: 'https://zalo.me/tranx',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: MapPin,
    title: 'Văn phòng',
    description: 'Ghé thăm chúng tôi',
    value: 'TP. Hồ Chí Minh',
    action: '#',
    color: 'from-orange-500 to-red-500',
  },
];

export const socialLinksMockContact = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/tranx',
    icon: FacebookIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/tranx',
    icon: LinkedinIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tranx',
    icon: TwitterIcon,
  },
];

export const officeHoursMockContact = [
  { day: 'Thứ 2 - Thứ 6', time: '8:00 - 18:00' },
  { day: 'Thứ 7', time: '8:00 - 12:00' },
  { day: 'Chủ nhật', time: 'Nghỉ' },
];

export const sectionsMockPrivacy = [
  {
    title: '1. Thông tin chúng tôi thu thập',
    icon: Database,
    content: [
      {
        subtitle: 'Thông tin cá nhân',
        items: ['Họ tên, email, số điện thoại', 'Thông tin công ty/tổ chức', 'Địa chỉ liên hệ'],
      },
      {
        subtitle: 'Thông tin kỹ thuật',
        items: [
          'Địa chỉ IP, loại thiết bị',
          'Trình duyệt và hệ điều hành',
          'Cookies và dữ liệu phiên',
        ],
      },
      {
        subtitle: 'Thông tin sử dụng',
        items: [
          'Lịch sử truy cập và tương tác',
          'Tính năng được sử dụng',
          'Thời gian sử dụng dịch vụ',
        ],
      },
      {
        // TODO: rà soát cùng đội kỹ thuật để mô tả đúng những gì SDK/app thực sự thu thập và có xử lý trên thiết bị hay gửi lên máy chủ.
        subtitle: 'Nội dung dịch thuật',
        items: [
          'Văn bản bạn nhập để dịch',
          'Bản ghi âm khi sử dụng tính năng dịch giọng nói',
          'Hình ảnh khi sử dụng tính năng dịch qua camera',
          'Tệp tài liệu khi sử dụng tính năng dịch tài liệu',
        ],
      },
    ],
  },
  {
    title: '2. Mục đích sử dụng thông tin',
    icon: Eye,
    content: [
      {
        subtitle: 'Cung cấp dịch vụ',
        items: [
          'Xử lý và quản lý tài khoản',
          'Thực hiện và cải thiện độ chính xác của các bản dịch',
          'Hỗ trợ kỹ thuật và khách hàng',
        ],
      },
      {
        subtitle: 'Cải thiện trải nghiệm',
        items: ['Phân tích hành vi người dùng', 'Tối ưu hóa hiệu suất', 'Phát triển tính năng mới'],
      },
      {
        subtitle: 'Giao tiếp',
        items: [
          'Gửi thông báo quan trọng',
          'Cập nhật sản phẩm và dịch vụ',
          'Khuyến mãi và ưu đãi (nếu đồng ý)',
        ],
      },
    ],
  },
  {
    title: '3. Bảo mật thông tin',
    icon: Lock,
    content: [
      {
        subtitle: 'Biện pháp kỹ thuật',
        items: [
          'Mã hóa SSL/TLS cho mọi kết nối',
          'Lưu trữ dữ liệu được mã hóa',
          'Xác thực đa yếu tố (MFA)',
        ],
      },
      {
        subtitle: 'Biện pháp quản lý',
        items: [
          'Kiểm soát truy cập nghiêm ngặt',
          'Đào tạo nhân viên về bảo mật',
          'Giám sát và phát hiện xâm nhập',
        ],
      },
      {
        subtitle: 'Tuân thủ',
        items: [
          'PDPA (Personal Data Protection Act)',
          'Chuẩn bảo mật ISO 27001',
          'Kiểm toán định kỳ',
        ],
      },
    ],
  },
  {
    title: '4. Chia sẻ thông tin',
    icon: UserCheck,
    content: [
      {
        subtitle: 'Đối tác dịch vụ',
        items: ['Nhà cung cấp hạ tầng cloud', 'Dịch vụ thanh toán', 'Công cụ phân tích'],
      },
      {
        subtitle: 'Yêu cầu pháp lý',
        items: ['Theo lệnh tòa án', 'Tuân thủ quy định pháp luật', 'Bảo vệ quyền lợi hợp pháp'],
      },
    ],
  },
  {
    title: '5. Quyền của bạn',
    icon: FileCheck,
    content: [
      {
        subtitle: 'Quyền truy cập và kiểm soát',
        items: [
          'Xem và cập nhật thông tin cá nhân',
          'Yêu cầu xóa dữ liệu',
          'Từ chối tiếp thị',
          'Xuất dữ liệu cá nhân',
          'Khiếu nại về xử lý dữ liệu',
        ],
      },
    ],
  },
];

// TODO: xác nhận số ngôn ngữ hỗ trợ chính xác và các định dạng tài liệu được hỗ trợ với đội sản phẩm trước khi lên production.
export const translationFeaturesMockProducts = [
  {
    id: 'text-translation',
    icon: Languages,
    title: 'Dịch văn bản & giọng nói',
    description:
      'Dịch tức thời giữa nhiều ngôn ngữ, gõ chữ hoặc nói trực tiếp, có phát âm và lưu lại lịch sử dịch.',
    highlights: [
      'Dịch hai chiều theo thời gian thực',
      'Nhận diện giọng nói và phát âm bản dịch',
      'Lưu lịch sử và từ đã dịch',
      'Chế độ hội thoại song ngữ',
    ],
  },
  {
    id: 'document-translation',
    icon: FileText,
    title: 'Dịch tài liệu',
    description:
      'Dịch trọn vẹn tài liệu, giữ nguyên bố cục gốc, phù hợp cho học tập, công việc và nghiên cứu.',
    highlights: [
      'Hỗ trợ nhiều định dạng tài liệu phổ biến',
      'Giữ nguyên bố cục và định dạng gốc',
      'Xử lý tài liệu nhiều trang',
      'Tải xuống bản dịch hoàn chỉnh',
    ],
  },
  {
    id: 'api',
    icon: Code2,
    title: 'Translation API',
    description:
      'Tích hợp năng lực dịch thuật của TranX trực tiếp vào sản phẩm của bạn thông qua REST API.',
    highlights: [
      'REST API kèm tài liệu chi tiết',
      'SDK và mã mẫu cho nhiều ngôn ngữ lập trình',
      'Độ trễ thấp, khả năng mở rộng cao',
      'Hỗ trợ kỹ thuật riêng cho đối tác',
    ],
  },
  {
    id: 'ai-translation',
    icon: Sparkles,
    title: 'AI Translation',
    description:
      'Công nghệ dịch thuật ứng dụng AI, hiểu ngữ cảnh để bản dịch tự nhiên và chính xác hơn.',
    highlights: [
      'Hiểu ngữ cảnh thay vì dịch máy móc từng từ',
      'Dịch qua camera bằng nhận diện văn bản (OCR)',
      'Liên tục cải thiện độ chính xác',
      'Gợi ý cách diễn đạt phù hợp văn hoá',
    ],
  },
];

export const featuresMockProducts = [
  {
    icon: Zap,
    title: 'Hiệu suất cao',
    description: 'Tải nhanh, phản hồi tức thì',
  },
  {
    icon: Shield,
    title: 'Bảo mật tuyệt đối',
    description: 'Mã hóa end-to-end',
  },
  {
    icon: Users,
    title: 'UX xuất sắc',
    description: 'Dễ sử dụng, thân thiện',
  },
  {
    icon: TrendingUp,
    title: 'Cập nhật liên tục',
    description: 'Tính năng mới hàng tuần',
  },
];

export const supportCategoriesMockSupport = [
  {
    icon: HelpCircle,
    title: 'Câu hỏi thường gặp',
    description: 'Tìm nhanh câu trả lời cho các thắc mắc phổ biến',
    link: '#faq',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code2,
    title: 'Translation API',
    description: 'Tài liệu tích hợp API dịch thuật cho developer',
    link: '/products#api',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Chính sách & Điều khoản',
    description: 'Chính sách bảo mật và điều khoản dịch vụ',
    link: '/privacy',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageCircle,
    title: 'Liên hệ hỗ trợ',
    description: 'Gửi yêu cầu hỗ trợ trực tiếp cho đội ngũ TranX',
    link: '/contact',
    color: 'from-red-500 to-pink-500',
  },
];

// TODO: rà soát lại với đội sản phẩm/kỹ thuật để đảm bảo câu trả lời khớp chính xác với hành vi thực tế của app trước khi lên production.
export const faqsMockSupport = [
  {
    category: 'Tổng quan',
    questions: [
      {
        q: 'TranX là gì?',
        a: 'TranX là ứng dụng dịch thuật đa ngôn ngữ, hỗ trợ dịch văn bản, giọng nói, hình ảnh (qua camera) và tài liệu bằng công nghệ AI.',
      },
      {
        q: 'TranX hỗ trợ những ngôn ngữ nào?',
        a: 'TranX hỗ trợ nhiều ngôn ngữ phổ biến và tiếp tục mở rộng thêm theo thời gian. Liên hệ với chúng tôi nếu bạn cần một ngôn ngữ cụ thể chưa được hỗ trợ.',
      },
      {
        q: 'Tôi có thể dùng TranX khi không có kết nối mạng không?',
        a: 'Một số tính năng dịch cơ bản có thể hoạt động ngoại tuyến; các tính năng dịch giọng nói, camera và tài liệu cần kết nối Internet để đạt độ chính xác tốt nhất.',
      },
    ],
  },
  {
    category: 'Kỹ thuật',
    questions: [
      {
        q: 'Làm sao để dịch tài liệu?',
        a: 'Vào mục Dịch tài liệu trên ứng dụng, tải lên tệp cần dịch và chọn ngôn ngữ đích. TranX sẽ giữ nguyên bố cục gốc của tài liệu.',
      },
      {
        q: 'Có hỗ trợ tích hợp API không?',
        a: 'Có, chúng tôi cung cấp Translation API kèm tài liệu chi tiết để bạn tích hợp năng lực dịch thuật của TranX vào sản phẩm của mình.',
      },
      {
        q: 'TranX có trên nền tảng nào?',
        a: 'TODO: cập nhật thông tin nền tảng và liên kết tải ứng dụng chính thức khi có xác nhận từ đội sản phẩm.',
      },
    ],
  },
  {
    category: 'Tài khoản & Bảo mật',
    questions: [
      {
        q: 'Sử dụng TranX có mất phí không?',
        a: 'TODO: cập nhật chính sách giá/gói sử dụng chính thức từ đội sản phẩm.',
      },
      {
        q: 'Dữ liệu dịch thuật của tôi có được bảo mật không?',
        a: 'Chúng tôi áp dụng các biện pháp bảo mật để bảo vệ dữ liệu người dùng. Chi tiết về việc thu thập và xử lý dữ liệu được nêu trong Chính sách bảo mật.',
      },
      {
        q: 'Có hỗ trợ sau khi gặp sự cố không?',
        a: 'Có, đội ngũ hỗ trợ của chúng tôi sẵn sàng tiếp nhận yêu cầu qua email hoặc hotline trong giờ làm việc.',
      },
    ],
  },
];

export const quickLinksMockSupport = [
  {
    title: 'Translation API',
    description: 'Tài liệu API đầy đủ cho developers',
    icon: Book,
    link: '/products#api',
  },
  {
    title: 'Liên hệ đội ngũ hỗ trợ',
    description: 'Trao đổi trực tiếp với đội ngũ TranX',
    icon: ExternalLink,
    link: '/contact',
  },
  {
    title: 'Chính sách & Điều khoản',
    description: 'Chính sách bảo mật và điều khoản dịch vụ',
    icon: FileText,
    link: '/terms',
  },
];

export const sectionsMockTerms = [
  {
    title: '1. Chấp nhận điều khoản',
    icon: FileText,
    content: [
      {
        subtitle: 'Cam kết sử dụng',
        items: [
          'Bằng việc truy cập và sử dụng ứng dụng TranX, bạn đồng ý tuân thủ các điều khoản này',
          'Nếu không đồng ý, vui lòng không sử dụng dịch vụ của chúng tôi',
          'Việc tiếp tục sử dụng sau khi có thay đổi điều khoản được coi là chấp nhận',
        ],
      },
      {
        subtitle: 'Độ tuổi sử dụng',
        items: [
          'Người dùng phải từ 18 tuổi trở lên',
          'Người dùng dưới 18 tuổi cần có sự đồng ý của phụ huynh/người giám hộ',
          'Chúng tôi có quyền yêu cầu xác minh độ tuổi',
        ],
      },
    ],
  },
  {
    title: '2. Tài khoản và bảo mật',
    icon: UserX,
    content: [
      {
        subtitle: 'Trách nhiệm tài khoản',
        items: [
          'Bạn chịu trách nhiệm duy trì bảo mật thông tin đăng nhập',
          'Thông báo ngay cho TranX nếu phát hiện truy cập trái phép',
          'Bạn chịu trách nhiệm về mọi hoạt động diễn ra dưới tài khoản của mình',
        ],
      },
      {
        subtitle: 'Yêu cầu tài khoản',
        items: [
          'Cung cấp thông tin chính xác, đầy đủ khi đăng ký',
          'Cập nhật thông tin kịp thời khi có thay đổi',
          'Không chia sẻ tài khoản cho người khác',
          'Không tạo nhiều tài khoản mà không có lý do chính đáng',
        ],
      },
    ],
  },
  {
    title: '3. Sử dụng dịch vụ',
    icon: AlertCircle,
    content: [
      {
        subtitle: 'Được phép',
        items: [
          'Sử dụng dịch vụ cho mục đích hợp pháp',
          'Truy cập và sử dụng các tính năng được cung cấp',
          'Tương tác với nội dung và người dùng khác một cách lịch sự',
        ],
      },
      {
        subtitle: 'Không được phép',
        items: [
          'Vi phạm pháp luật hoặc quyền của người khác',
          'Phát tán virus, malware hoặc mã độc hại',
          'Spam, lừa đảo hoặc gây phiền nhiễu',
          'Sao chép, phân phối hoặc sửa đổi dịch vụ không có phép',
          'Khai thác lỗ hổng hệ thống để truy cập trái phép',
          'Thu thập dữ liệu người dùng khác',
        ],
      },
    ],
  },
  {
    title: '4. Nội dung người dùng',
    icon: RefreshCw,
    content: [
      {
        subtitle: 'Quyền sở hữu',
        items: [
          'Bạn giữ quyền sở hữu nội dung mà bạn tạo ra',
          'Bạn cấp cho TranX quyền sử dụng nội dung để vận hành dịch vụ',
          'Chúng tôi có thể hiển thị, phân phối nội dung của bạn trong phạm vi dịch vụ',
        ],
      },
      {
        subtitle: 'Trách nhiệm',
        items: [
          'Bạn chịu trách nhiệm về nội dung mình đăng tải',
          'Nội dung phải tuân thủ pháp luật và quy định cộng đồng',
          'TranX có quyền gỡ bỏ nội dung vi phạm mà không cần thông báo',
        ],
      },
    ],
  },
  {
    title: '5. Thanh toán và hoàn tiền',
    icon: DollarSign,
    content: [
      {
        subtitle: 'Phí dịch vụ',
        items: [
          'Một số dịch vụ có thể yêu cầu thanh toán phí',
          'Giá cả được hiển thị rõ ràng trước khi thanh toán',
          'Bạn đồng ý thanh toán đầy đủ các khoản phí phát sinh',
        ],
      },
      {
        subtitle: 'Chính sách hoàn tiền',
        items: [
          'Hoàn tiền được xem xét từng trường hợp cụ thể',
          'Yêu cầu hoàn tiền phải được gửi trong vòng 14 ngày',
          'Phí đã thanh toán cho dịch vụ đã sử dụng không được hoàn lại',
        ],
      },
    ],
  },
  {
    title: '6. Sở hữu trí tuệ',
    icon: Gavel,
    content: [
      {
        subtitle: 'Quyền của TranX',
        items: [
          'Tất cả mã nguồn, thiết kế, logo, thương hiệu thuộc sở hữu của TranX',
          'Bạn không được sao chép, sửa đổi hoặc phân phối mà không có phép',
          'Vi phạm có thể bị xử lý theo pháp luật',
        ],
      },
      {
        subtitle: 'Giấy phép sử dụng',
        items: [
          'TranX cấp cho bạn giấy phép hạn chế để sử dụng dịch vụ',
          'Giấy phép không độc quyền, không thể chuyển nhượng',
          'Giấy phép có thể bị thu hồi nếu vi phạm điều khoản',
        ],
      },
    ],
  },
  {
    title: '7. Chấm dứt dịch vụ',
    icon: Ban,
    content: [
      {
        subtitle: 'Chấm dứt bởi người dùng',
        items: [
          'Bạn có thể chấm dứt sử dụng dịch vụ bất kỳ lúc nào',
          'Liên hệ với chúng tôi để yêu cầu xóa tài khoản',
          'Một số dữ liệu có thể được lưu trữ theo yêu cầu pháp luật',
        ],
      },
      {
        subtitle: 'Chấm dứt bởi TranX',
        items: [
          'Chúng tôi có quyền đình chỉ/xóa tài khoản vi phạm',
          'Thông báo trước sẽ được gửi trừ trường hợp vi phạm nghiêm trọng',
          'Bạn vẫn phải thanh toán các khoản phí đã phát sinh',
        ],
      },
    ],
  },
];
