/* ============================================
   MAIN.JS — Visa Kết Hôn Landing Page
   Language toggle, animations, interactions
   ============================================ */

// ─── Bilingual Content ────────────────────────────────────────────
const translations = {
  vi: {
    // Nav
    navAbout: 'Giới thiệu',
    navFeatures: 'Nội dung',
    navAuthor: 'Tác giả',
    navContact: 'Liên hệ',

    // Hero
    heroBadge: 'Sách mới xuất bản',
    heroTitle1: 'Hành trình chinh phục',
    heroTitleHighlight: 'VISA',
    heroTitle2: 'kết hôn tại Úc',
    heroSubtitle: 'Cẩm nang xây dựng chứng cứ và trả lời phỏng vấn',
    heroDesc: 'Cuốn sách toàn diện giúp bạn tự tin chuẩn bị hồ sơ visa kết hôn, từ xây dựng chứng cứ mối quan hệ đến kỹ năng trả lời phỏng vấn.',
    heroAuthor: 'TS. Nguyễn Thành Tô',
    heroBtnDownload: 'Tải sách miễn phí',
    heroBtnPreview: 'Xem trước nội dung',
    bookBadge: 'Miễn phí',

    // About Book
    aboutLabel: 'Giới thiệu sách',
    aboutTitle: 'Cẩm nang toàn diện cho hành trình visa kết hôn',
    aboutText: 'Cuốn sách "Hành trình chinh phục Visa kết hôn tại Úc" là tài liệu hướng dẫn chi tiết, được biên soạn từ kinh nghiệm thực tế của chuyên gia pháp lý di trú. Với ngôn ngữ dễ hiểu và các ví dụ cụ thể, cuốn sách sẽ đồng hành cùng bạn qua từng bước trong quá trình xin visa kết hôn tại Úc.',
    highlightTitle1: 'Hướng dẫn chứng cứ',
    highlightDesc1: 'Chi tiết cách thu thập và trình bày chứng cứ mối quan hệ thuyết phục',
    highlightTitle2: 'Chuẩn bị phỏng vấn',
    highlightDesc2: 'Kỹ năng trả lời phỏng vấn và những câu hỏi thường gặp',
    highlightTitle3: 'Quy trình từng bước',
    highlightDesc3: 'Hướng dẫn chi tiết từng giai đoạn trong quy trình xin visa',

    // Stats
    stat1Num: '200+',
    stat1Label: 'Trang nội dung',
    stat2Num: '50+',
    stat2Label: 'Mẫu chứng cứ',
    stat3Num: '100+',
    stat3Label: 'Câu hỏi phỏng vấn',
    stat4Num: '10+',
    stat4Label: 'Năm kinh nghiệm',

    // Features
    featuresLabel: 'Điểm nổi bật',
    featuresTitle: 'Tại sao nên đọc cuốn sách này?',
    featuresSubtitle: 'Những giá trị cốt lõi mà cuốn sách mang đến cho bạn',
    feature1Title: 'Chứng cứ mối quan hệ',
    feature1Desc: 'Hướng dẫn chi tiết cách xây dựng và trình bày chứng cứ mối quan hệ chân thực, có sức thuyết phục cao.',
    feature2Title: 'Kỹ năng phỏng vấn',
    feature2Desc: 'Các câu hỏi phỏng vấn thực tế và cách trả lời thông minh, tự tin trước hội đồng xét duyệt.',
    feature3Title: 'Kinh nghiệm thực tế',
    feature3Desc: 'Được đúc kết từ hàng trăm trường hợp thành công, mang đến góc nhìn thực tiễn nhất.',
    feature4Title: 'Hướng dẫn pháp lý',
    feature4Desc: 'Giải thích rõ ràng các quy định pháp luật, giúp bạn hiểu đúng quyền lợi và nghĩa vụ.',

    // Book Preview
    previewLabel: 'Xem trước nội dung',
    previewTitle: 'Khám phá nội dung cuốn sách',
    previewSubtitle: 'Tìm hiểu các chương chính và kiến thức bạn sẽ nhận được',
    ch1Title: 'Tổng quan về Visa kết hôn Úc',
    ch1Desc: 'Giới thiệu các loại visa kết hôn tại Úc (Subclass 309/100, 820/801), điều kiện đủ điều kiện, thời gian xử lý, và những thay đổi chính sách mới nhất. Giúp bạn hiểu rõ con đường phía trước.',
    ch2Title: 'Chuẩn bị hồ sơ hoàn chỉnh',
    ch2Desc: 'Hướng dẫn từng bước chuẩn bị các giấy tờ cần thiết: giấy khai sinh, hộ chiếu, giấy xác nhận tình trạng hôn nhân, lý lịch tư pháp, giấy khám sức khỏe, và các tài liệu bổ trợ.',
    ch3Title: 'Xây dựng chứng cứ mối quan hệ',
    ch3Desc: 'Chi tiết về 4 trụ cột chứng cứ: tài chính chung, bản chất mối quan hệ, cam kết với nhau, và bản chất cuộc sống chung. Kèm theo ví dụ thực tế và mẫu biểu tham khảo.',
    ch4Title: 'Phỏng vấn và trả lời câu hỏi',
    ch4Desc: 'Tổng hợp các câu hỏi phỏng vấn thường gặp nhất, cách chuẩn bị tâm lý, kỹ thuật trả lời hiệu quả. Bao gồm các tình huống thực tế và lời khuyên từ chuyên gia.',
    ch5Title: 'Sau khi nộp hồ sơ',
    ch5Desc: 'Hướng dẫn theo dõi tiến trình xử lý, cách phản hồi yêu cầu bổ sung hồ sơ (RFI), chuẩn bị cho giai đoạn visa tạm thời và vĩnh trú, quyền lợi và nghĩa vụ sau khi có visa.',

    // Author
    authorLabel: 'Về tác giả',
    authorTitle: 'TS. Nguyễn Thành Tô',
    authorRole: 'Solicitor — Office Manager',
    authorCompany: 'Solis Lawyers',
    authorBio: 'Tiến sĩ Nguyễn Thành Tô là luật sư được cấp phép hành nghề tại Úc, với hơn 10 năm kinh nghiệm trong lĩnh vực luật di trú và gia đình. Anh đã tư vấn và hỗ trợ hàng trăm gia đình Việt-Úc thành công trong hành trình visa kết hôn. Cuốn sách là tâm huyết được đúc kết từ kinh nghiệm thực tiễn phong phú.',
    badgeDIMI: 'DIMI BOOK',
    badgeNXB: 'NXB Thế Giới',
    badgeDrTO: 'DrTO',

    // Testimonials
    testimonialsLabel: 'Nhận xét từ độc giả',
    testimonialsTitle: 'Độc giả nói gì về cuốn sách?',
    testimonialsSubtitle: 'Những phản hồi chân thực từ người đã đọc và áp dụng thành công',
    test1Text: 'Cuốn sách giúp chúng tôi tự tin chuẩn bị hồ sơ mà không cần thuê luật sư. Hướng dẫn rất chi tiết và dễ hiểu, đặc biệt phần chứng cứ mối quan hệ rất hữu ích.',
    test1Name: 'Nguyễn Minh Anh',
    test1Role: 'Đã được cấp visa 309',
    test2Text: 'Tôi đánh giá đây là cuốn sách tốt nhất về visa kết hôn Úc bằng tiếng Việt. Phần phỏng vấn giúp tôi chuẩn bị kỹ lưỡng và vượt qua thành công.',
    test2Name: 'Trần Thanh Hà',
    test2Role: 'Đã được cấp visa 820',
    test3Text: 'Với tư cách là một chuyên viên tư vấn di trú, tôi khuyến khích khách hàng đọc cuốn sách này để hiểu rõ quy trình và chuẩn bị tốt hơn.',
    test3Name: 'Phạm Quốc Đạt',
    test3Role: 'Chuyên viên tư vấn di trú',

    // Contact
    contactLabel: 'Liên hệ & Tải sách',
    contactCtaTitle: 'Sẵn sàng cho hành trình chinh phục visa kết hôn?',
    contactCtaDesc: 'Tải sách miễn phí ngay hôm nay và bắt đầu chuẩn bị hồ sơ visa kết hôn một cách tự tin, chuyên nghiệp.',
    contactCtaBtn: 'Tải sách miễn phí',
    contactPhoneAU: 'Điện thoại (Úc)',
    contactPhoneVN: 'Điện thoại (Việt Nam)',
    contactEmail: 'Email',
    contactAddress: 'Địa chỉ văn phòng',

    // Footer
    footerCopyright: '© 2026 Dr. To Nguyen — Solis Lawyers. Bảo lưu mọi quyền.',
    footerPrivacy: 'Chính sách bảo mật',
    footerTerms: 'Điều khoản sử dụng',
  },

  en: {
    // Nav
    navAbout: 'About',
    navFeatures: 'Features',
    navAuthor: 'Author',
    navContact: 'Contact',

    // Hero
    heroBadge: 'Newly Published',
    heroTitle1: 'The Journey to Conquering',
    heroTitleHighlight: 'VISA',
    heroTitle2: 'Marriage Visa in Australia',
    heroSubtitle: 'A Guide to Building Evidence and Answering Interviews',
    heroDesc: 'A comprehensive book helping you confidently prepare your marriage visa application, from building relationship evidence to mastering interview skills.',
    heroAuthor: 'Dr. To Nguyen (PhD)',
    heroBtnDownload: 'Download Free Book',
    heroBtnPreview: 'Preview Content',
    bookBadge: 'Free',

    // About Book
    aboutLabel: 'About the Book',
    aboutTitle: 'The Complete Guide to Your Marriage Visa Journey',
    aboutText: 'The book "Journey to Conquering Marriage Visa in Australia" is a detailed guide compiled from the real-world experience of immigration law experts. With clear language and specific examples, this book will accompany you through every step of the Australian marriage visa process.',
    highlightTitle1: 'Evidence Guide',
    highlightDesc1: 'Detailed instructions on collecting and presenting compelling relationship evidence',
    highlightTitle2: 'Interview Preparation',
    highlightDesc2: 'Interview skills and frequently asked questions you need to know',
    highlightTitle3: 'Step-by-Step Process',
    highlightDesc3: 'Detailed guidance through each stage of the visa application process',

    // Stats
    stat1Num: '200+',
    stat1Label: 'Pages of Content',
    stat2Num: '50+',
    stat2Label: 'Evidence Templates',
    stat3Num: '100+',
    stat3Label: 'Interview Questions',
    stat4Num: '10+',
    stat4Label: 'Years of Experience',

    // Features
    featuresLabel: 'Key Features',
    featuresTitle: 'Why Should You Read This Book?',
    featuresSubtitle: 'Core values that this book brings to you',
    feature1Title: 'Relationship Evidence',
    feature1Desc: 'Detailed guidance on building and presenting authentic, highly convincing relationship evidence.',
    feature2Title: 'Interview Skills',
    feature2Desc: 'Real interview questions and smart, confident answers for the assessment panel.',
    feature3Title: 'Real Experience',
    feature3Desc: 'Distilled from hundreds of successful cases, providing the most practical perspectives.',
    feature4Title: 'Legal Guidance',
    feature4Desc: 'Clear explanation of legal regulations, helping you understand your rights and obligations.',

    // Book Preview
    previewLabel: 'Preview Content',
    previewTitle: 'Explore the Book Content',
    previewSubtitle: 'Discover the main chapters and knowledge you will gain',
    ch1Title: 'Overview of Australian Marriage Visa',
    ch1Desc: 'Introduction to marriage visa types in Australia (Subclass 309/100, 820/801), eligibility conditions, processing times, and latest policy changes. Helping you understand the path ahead.',
    ch2Title: 'Preparing a Complete Application',
    ch2Desc: 'Step-by-step guide for preparing necessary documents: birth certificates, passports, marital status certificates, police clearances, health examinations, and supporting materials.',
    ch3Title: 'Building Relationship Evidence',
    ch3Desc: 'Details on 4 evidence pillars: shared finances, nature of the relationship, mutual commitment, and nature of shared life. Includes real examples and reference templates.',
    ch4Title: 'Interview and Answering Questions',
    ch4Desc: 'Compilation of most common interview questions, mental preparation, effective answering techniques. Includes real scenarios and expert advice.',
    ch5Title: 'After Submitting Your Application',
    ch5Desc: 'Guide to tracking processing progress, responding to RFIs (Request for Information), preparing for temporary and permanent visa stages, rights and obligations after visa grant.',

    // Author
    authorLabel: 'About the Author',
    authorTitle: 'Dr. To Nguyen (PhD)',
    authorRole: 'Solicitor — Office Manager',
    authorCompany: 'Solis Lawyers',
    authorBio: 'Dr. To Nguyen is a licensed solicitor in Australia with over 10 years of experience in immigration and family law. He has advised and assisted hundreds of Vietnamese-Australian families in their marriage visa journey. This book is a culmination of his rich practical experience.',
    badgeDIMI: 'DIMI BOOK',
    badgeNXB: 'World Publisher',
    badgeDrTO: 'DrTO',

    // Testimonials
    testimonialsLabel: 'Reader Reviews',
    testimonialsTitle: 'What Readers Say About the Book',
    testimonialsSubtitle: 'Genuine feedback from those who read and successfully applied the knowledge',
    test1Text: 'This book helped us confidently prepare our application without hiring a lawyer. The guidance is very detailed and easy to understand, especially the relationship evidence section.',
    test1Name: 'Minh Anh Nguyen',
    test1Role: 'Granted Visa 309',
    test2Text: 'I consider this the best book on Australian marriage visa in Vietnamese. The interview section helped me prepare thoroughly and pass successfully.',
    test2Name: 'Thanh Ha Tran',
    test2Role: 'Granted Visa 820',
    test3Text: 'As an immigration consultant, I encourage clients to read this book to better understand the process and prepare more effectively.',
    test3Name: 'Quoc Dat Pham',
    test3Role: 'Immigration Consultant',

    // Contact
    contactLabel: 'Contact & Download',
    contactCtaTitle: 'Ready for Your Marriage Visa Journey?',
    contactCtaDesc: 'Download the free book today and start preparing your marriage visa application with confidence and professionalism.',
    contactCtaBtn: 'Download Free Book',
    contactPhoneAU: 'Phone (Australia)',
    contactPhoneVN: 'Phone (Vietnam)',
    contactEmail: 'Email',
    contactAddress: 'Office Address',

    // Footer
    footerCopyright: '© 2026 Dr. To Nguyen — Solis Lawyers. All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
  }
};

// ─── State ────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('visa-book-lang') || 'vi';
let currentTestimonial = 0;
let testimonialInterval = null;

// ─── DOM Ready ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initAccordion();
  initTestimonials();
  initBackToTop();
  initSmoothScroll();
  initGlobalParticles();
});

// ─── Language System ──────────────────────────────────────────────
function initLanguage() {
  setLanguage(currentLang, false);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langBtn;
      if (lang !== currentLang) {
        setLanguage(lang, true);
      }
    });
  });
}

function setLanguage(lang, animate) {
  currentLang = lang;
  localStorage.setItem('visa-book-lang', lang);

  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });

  const t = translations[lang];

  if (animate) {
    document.body.classList.add('lang-switching');
    setTimeout(() => {
      applyTranslations(t);
      document.body.classList.remove('lang-switching');
    }, 250);
  } else {
    applyTranslations(t);
  }
}

function applyTranslations(t) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.dataset.lang;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
}

// ─── Navbar Scroll ────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ─── Mobile Menu ──────────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.querySelector('.nav-mobile-btn');
  const menu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  const closeMenu = () => {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ─── Scroll Reveal ────────────────────────────────────────────────
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ─── Accordion (Book Preview) ────────────────────────────────────
function initAccordion() {
  const items = document.querySelectorAll('.preview-item');

  items.forEach(item => {
    const header = item.querySelector('.preview-item-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      items.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Open first by default
  if (items.length > 0) {
    items[0].classList.add('active');
  }
}

// ─── Testimonials Slider ─────────────────────────────────────────
function initTestimonials() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.testimonials-dots button');
  if (!track || !dots.length) return;

  const goTo = (index) => {
    currentTestimonial = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      resetAutoSlide();
    });
  });

  const autoSlide = () => {
    const next = (currentTestimonial + 1) % dots.length;
    goTo(next);
  };

  const resetAutoSlide = () => {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(autoSlide, 5000);
  };

  goTo(0);
  resetAutoSlide();
}

// ─── Back to Top ──────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── Smooth Scroll ────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ─── Global Floating Particles (Hearts + Petals) ──────────────────
function initGlobalParticles() {
  // Create full-page particle container
  const container = document.createElement('div');
  container.className = 'global-particles';
  document.body.appendChild(container);

  const particleTypes = [
    { type: 'heart', content: '♥', minSize: 10, maxSize: 18 },
    { type: 'petal', content: '', minSize: 8, maxSize: 14 },
  ];

  const colors = [
    'rgba(232, 160, 180, 0.35)',
    'rgba(245, 198, 208, 0.4)',
    'rgba(196, 84, 122, 0.2)',
    'rgba(240, 184, 200, 0.35)',
    'rgba(224, 163, 176, 0.3)',
  ];

  function createParticle() {
    const el = document.createElement('div');
    const config = particleTypes[Math.random() < 0.4 ? 0 : 1];
    const size = config.minSize + Math.random() * (config.maxSize - config.minSize);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * 100;
    const duration = 10 + Math.random() * 12;
    const delay = Math.random() * 2;
    const drift = -60 + Math.random() * 120;
    const rotation = Math.random() * 720;

    el.className = 'gp-' + config.type;
    el.style.cssText =
      'position:absolute;' +
      'left:' + startX + '%;' +
      'top:-20px;' +
      'width:' + size + 'px;' +
      'height:' + size + 'px;' +
      'color:' + color + ';' +
      'font-size:' + size + 'px;' +
      'pointer-events:none;' +
      'opacity:0;' +
      'animation:gpFall ' + duration + 's ' + delay + 's linear forwards;' +
      '--gp-drift:' + drift + 'px;' +
      '--gp-rotation:' + rotation + 'deg;';

    if (config.type === 'heart') {
      el.textContent = config.content;
      el.style.lineHeight = '1';
    } else {
      el.style.background = color;
      el.style.borderRadius = '50% 0 50% 50%';
    }

    container.appendChild(el);

    // Remove after animation completes
    setTimeout(function () {
      el.remove();
    }, (duration + delay) * 1000 + 500);
  }

  // Spawn particles at intervals
  var spawnCount = 0;
  var maxActiveParticles = 25;

  function spawnParticle() {
    var activeCount = container.children.length;
    if (activeCount < maxActiveParticles) {
      createParticle();
      if (Math.random() < 0.3 && activeCount < maxActiveParticles - 1) {
        createParticle();
      }
    }
    spawnCount++;

    // Adaptive: faster at start, slower later
    var interval = spawnCount < 10 ? 400 : 800 + Math.random() * 1200;
    setTimeout(spawnParticle, interval);
  }

  spawnParticle();

  // Pause when tab hidden for performance
  document.addEventListener('visibilitychange', function () {
    container.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
}
