// document.addEventListener("DOMContentLoaded", () => {
//   const header = document.querySelector('header[data-include-path]');
//   const path = header.getAttribute('data-include-path');

//   if (path) {
//       fetch(path)
//           .then(response => response.text())
//           .then(data => {
//               header.innerHTML = data; // 외부 파일 내용을 삽입

//               // 로그인 상태 확인 및 헤더 업데이트
//               const loginBtn = document.getElementById('login-btn');
//               const username = localStorage.getItem('username'); // 로컬 저장소에서 사용자 이름 확인

//               if (username) {
//                   loginBtn.textContent = '로그아웃';
//                   loginBtn.addEventListener('click', () => {
//                       // 로그아웃 로직
//                       localStorage.removeItem('username'); // 사용자 이름 삭제
//                       alert('로그아웃되었습니다.');
//                       window.location.reload(); // 페이지 새로고침
//                   });
//               } else {
//                   loginBtn.textContent = '로그인';
//                   loginBtn.addEventListener('click', () => {
//                       window.location.href = './login.html'; // 로그인 페이지로 이동
//                   });
//               }
//           })
//           .catch(err => console.error('Error loading header:', err));
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header[data-include-path]');
  const path = header.getAttribute('data-include-path');

  if (path) {
      fetch(path)
          .then(response => response.text())
          .then(data => {
              header.innerHTML = data; // 외부 파일 내용을 삽입

              // 로그인 상태 확인 및 헤더 업데이트
              const loginBtn = document.getElementById('login-btn');
              const username = localStorage.getItem('username'); // 로컬 저장소에서 사용자 이름 확인

              if (username) {
                  loginBtn.textContent = '로그아웃';
                  loginBtn.addEventListener('click', () => {
                      // 로그아웃 로직
                      localStorage.removeItem('username'); // 사용자 이름 삭제
                      alert(`${username}님, 로그아웃되었습니다.`); // 사용자 이름 포함 메시지
                      window.location.reload(); // 페이지 새로고침
                  });
              } else {
                  loginBtn.textContent = '로그인';
                  loginBtn.addEventListener('click', () => {
                      window.location.href = './login.html'; // 로그인 페이지로 이동
                  });
              }
          })
          .catch(err => console.error('Error loading header:', err));
  }
});
