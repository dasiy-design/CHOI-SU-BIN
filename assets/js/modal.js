const modal = document.getElementById('modal');
const modalBody = modal.querySelector('modal-body');
const closeBtn = modal.querySelector('.close');

const modalData = [
  {
    title: "K-직장인이 월요일보다 수요일이 더 피곤한 이유"
    subtitle: "100% personal"
    caption: "B2B 웰니스사업을 하고 있는 회사의 데이터를 분석한 내용을 토대로 작성된 기사를 인용하여 카드뉴스를 제작하였습니다."
    category: " uiux"
  },
  {
    title: ""
    subtitle: ""
    caption: ""
    category: ""
  },
]

let currentModalIndex = 0;

// 모달 열기
function openModal(index){
  if(index => 0 && index < modalData.length){
    currentModalIndex = index;
    updateModalContent(modalData[currentModalIndex]);

    const modal = document.getElementById('designModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}


function updataeModalContent(data){
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtilte;
  document.getElementById('.modalCaption').innerHTML = `<p>${data.caption}</p>`;
  document.getElementById('modalImg').src = data.imageSrc;
  document.getElementById('modalImg').alt = data.title;
}

// 닫기
function closeModal(){
  const modal = document.getElementById('designModal');
  modal.style.display ='none';
  document.body.style.overflow ='auto';
}

// 다음모달
function nextModal(){
  currentModalIndex = (currentModalIndex + 1) % modalData.length;
  updataeModalContent(modalData[currnentModalIndex]);
}

// 이전모달
function prevModal(){
  currentModalIndex = (currentModalIndex - 1 + modalData.length) % modalData.length;
  updataeModalContent(modalData[currentModalIndex]);
}

// eventlistner

window.addEventListener('click', function(event){
  const modal = document.getElementById('designModal');
  if(event.target === modal){
    closeModal();
  }
});

document.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('designModal');
  modal.style.display= 'none';
});


modalBody.innerHTML = `
  <h2>${data.title}</h2>
  <p>${data.description}</p>
  <img src= "${data.imageSrc}" alt="${data.title}">
`;
  modal.style.display = 'block';
}

// 모달 닫기
function closeModal(){
  modal.style.display ='none';
}

// 이벤트 바이딩
document.querySelectorAll('more').forEach(button => {
  button.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-inndex');
    openModal(index);
  });
});

closeBtn.addEventListener('click', (e) => {
  if(e.target === modal){
    closeModal();
  }
});

let currentModalIndex = 0;
let currentCategory = 'all';

function openModal(title, caption, index){
  const filterdItems = modalData.filter(item =>
    currentCategory === 'all' || item.category === currentCategory
  );

  currentModalIndex - filteredItems.findIndex(item => item.title === title);
  if(currentModalIndex === -1) currentModalIndex = 0;

  updateModalContent(filteredItems[currentModalIndex]);

  const modal = document.getElementById('designModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function updateModalContent(data){
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modalCaption').innderHTML = data.description;
}

function closeModal(){
  const modal = document.getElementById('designModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}
function nextModal(){
  const filteredItems = modalData.filter(item =>
    currentCategory === 'all' || item.category === currentCategory
  );

  currentModalIndex = (currentModalIndex + 1) % filteredItems.length;
  updataeModalContent(filteredItems[currentModalIndex]);
}

function prevModal(){
  const filteredItems = modalData.filter(item =>
    currentCategory === 'all' || item.category === currentCategory
  );

  currentModalIndex = (currentModalIndex - 1 + filteredItems.length) % filteredItems.length;
  updataeModalContent(filteredItems[currentModalIndex]);

  tags.forEach(tag => {
    tag.addEventLister('click', function(){
      currentCategory = this. getAttribute('data-category');
    });
  });

  window.onclick = function(event){
    const modal = document.getElementById('designModal');
    if(event.target === modal){
      closeModal();
    }
  }

  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
      closeModal();
    }
  });
}


// $(document).ready(function(){

//   //각 목록을 클릭했을때 해당내용 나옴
//   $(".item-list li").click(function(){

//     pageNum =$(this).index();

//     $(".page-num span:nth-child(1)").text(pageNum+1);  //오른쪽 상단 페이지번호
//     $(".modal-content li").eq(pageNum).stop().fadeIn();  //각 목록의 내용
//     $(".modal").stop().fadeIn(); //검정배경

//   });

//   ///이전다음버튼
//   $(".pre").click(function(){
//     if(pageNum>0){
//       $(".modal-content li").eq(pageNum).hide(); 
//       pageNum--;
//       $(".page-num span:nth-child(1)").text(pageNum+1);
// 			$(".modal-content li").eq(pageNum).stop().fadeIn();
//     };
//   });

//   $(".next").click(function(){
//     if(pageNum<10){
//       $(".modal-content li").eq(pageNum).hide(); 
//       pageNum++;
//       $(".page-num span:nth-child(1)").text(pageNum+1);
// 			$(".modal-content li").eq(pageNum).stop().fadeIn();
//     };
//   });

//   //닫기버튼
//   $(".close, .modal").click(function(){
//     $(".modal").stop().fadeOut();
// 		$(".modal-content li").stop().fadeOut();
//   });

// });
