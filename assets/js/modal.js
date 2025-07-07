const projectData = [
            {
                title: "웹 디자인 프로젝트",
                subtitle: "현대적인 반응형 웹사이트",
                content: `
                    <p><strong>프로젝트 개요:</strong> 이 프로젝트는 현대적이고 반응형인 웹사이트 디자인을 목표로 했습니다.</p>
                    <p><strong>주요 특징:</strong></p>
                    <p>• 모든 디바이스에서 완벽하게 작동하는 반응형 디자인</p>
                    <p>• 사용자 친화적인 인터페이스와 직관적인 네비게이션</p>
                    <p>• 최신 웹 표준과 접근성 가이드라인 준수</p>
                    <p>• 빠른 로딩 속도와 최적화된 성능</p>
                    <p><strong>사용 기술:</strong> HTML5, CSS3, JavaScript, Bootstrap</p>
                `
            },
            {
                title: "모바일 앱 UI",
                subtitle: "직관적인 사용자 경험",
                content: `
                    <p><strong>프로젝트 개요:</strong> 사용자 중심의 모바일 앱 인터페이스 디자인입니다.</p>
                    <p><strong>주요 특징:</strong></p>
                    <p>• 직관적이고 사용하기 쉬운 인터페이스</p>
                    <p>• 일관된 디자인 시스템과 컴포넌트</p>
                    <p>• 접근성을 고려한 컬러 팔레트와 타이포그래피</p>
                    <p>• 부드러운 애니메이션과 인터랙션</p>
                    <p><strong>플랫폼:</strong> iOS, Android</p>
                    <p><strong>도구:</strong> Figma, Adobe XD, Sketch</p>
                `
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
            document.body.style.overflow = 'auto';
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