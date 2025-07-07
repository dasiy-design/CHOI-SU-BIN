const projectData = [
{
  title: "행복을 전달하고 싶은 퍼블리셔 최수빈",
  subtitle: "",
  content: `
      <p><strong>100% Personal</strong></p>
      <p>• 사용툴: Figma</p>
      <p>• 제작 기간: 4H</p>
      <p>• 제작 날짜: 2025 </p>
  `
},
{
  title: "Mitte Banner",
  subtitle: "Mockup",
  badge: "100% Personal",
  content: `
    <p><strong>100% Personal</strong></p>
    <p>• 사용툴: Figma</p>
    <p>• 제작 기간: 4H</p>
    <p>• 제작 날짜: 2025</p>
  `,
  date: "02/11",
    productTitle: "진한 초콜릿 맛과<br>부드러운 거품이<br>특별한 미디어 초콜릿",
    productBrand: "미떼"
},
{
  title: "브랜딩 패키지",
  subtitle: "완전한 브랜드 아이덴티티",
  content: `
      <p><strong>프로젝트 개요:</strong> 기업을 위한 완전한 브랜드 아이덴티티 패키지 개발</p>
      <p><strong>포함 항목:</strong></p>
      <p>• 로고 디자인 (주 로고, 서브 로고, 심볼)</p>
      <p>• 컬러 팔레트 (주 색상, 보조 색상, 액센트 색상)</p>
      <p>• 타이포그래피 시스템</p>
      <p>• 명함, 레터헤드, 봉투 디자인</p>
      <p>• 브랜드 가이드라인 문서</p>
      <p><strong>컨셉:</strong> 모던하면서도 신뢰감을 주는 디자인</p>
  `
},
{
  title: "일러스트레이션",
  subtitle: "창의적인 시각적 표현",
  content: `
      <p><strong>프로젝트 개요:</strong> 다양한 목적과 매체를 위한 창의적인 일러스트레이션 작품들</p>
      <p><strong>작품 종류:</strong></p>
      <p>• 책 삽화 및 표지 디자인</p>
      <p>• 웹사이트 및 앱용 아이콘 일러스트</p>
      <p>• 마케팅 자료용 캐릭터 디자인</p>
      <p>• 포스터 및 배너 일러스트</p>
      <p><strong>스타일:</strong> 현대적이고 다채로운 벡터 스타일</p>
      <p><strong>도구:</strong> Adobe Illustrator, Procreate, Photoshop</p>
  `
  }
];

let currentIndex = 0;
const modal = document.getElementById('designModal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalContent = document.getElementById('modalContent');

// 인덱스로 모달 열기
function openModalByIndex(index) {
  if (index >= 0 && index < projectData.length) {
    currentIndex = index;
    const project = projectData[index];
    
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalContent.innerHTML = project.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 포커스 트래핑
    trapFocus(modal);
  }
}

// 모달 닫기
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// 이전 프로젝트 보기
function showPrevProject() {
  const nextIndex = (currentIndex - 1) % projectData.length;
  openModalByIndex(prevIndex);
}

// 다음 프로젝트 보기
function showNextProject() {
  const nextIndex = (currentIndex + 1) % projectData.length;
  openModalByIndex(nextIndex);
}

// 포커스 트래핑 함수
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
    } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });

    // 첫 번째 요소에 포커스
  if (firstElement) {
      firstElement.focus();
  }
}

// 이벤트 리스너들
document.addEventListener('DOMContentLoaded', function() {
// 카드 클릭 이벤트
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        openModalByIndex(index);
    });
});

    // 모달 오버레이 클릭 시 닫기
  modal.addEventListener('click', function(e) {
      if (e.target === modal) {
          closeModal();
      }
  });

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

// 추가 유틸리티 함수들
function openModalWithData(index, customData) {
  if (customData) {
    modalTitle.textContent = customData.title;
    modalSubtitle.textContent = customData.subtitle;
    modalContent.innerHTML = customData.content;
    } else {
    openModalByIndex(index);
  }
}

// 전체 모달 데이터 반환
function getModalData() {
  return projectData;
}

// 특정 인덱스 데이터 반환
function getModalDataByIndex(index) {
  return projectData[index] || null;
}