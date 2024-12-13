function displayBookDetail() {
  try {
    // 로컬 스토리지에서 저장된 책 정보를 불러옴
    const bookDetail = JSON.parse(localStorage.getItem('bookDetail'));

    if (!bookDetail) {
      throw new Error('No book detail found.');
    }

    const bookDetailsContainer = document.getElementById('book-details');
    bookDetailsContainer.innerHTML = `
      <img src="${bookDetail.image}" alt="${bookDetail.title}">
      <h3>${bookDetail.title}</h3>
      <p><strong>Author:</strong> ${bookDetail.author}</p>
      <p><strong>Publisher:</strong> ${bookDetail.publisher}</p>
      <p><strong>ISBN:</strong> ${bookDetail.isbn}</p>
      <p><strong>Price:</strong> ${bookDetail.price}원</p>
      <p><strong>Genre:</strong> ${bookDetail.genre}</p>
      <h4>Summary:</h4>
      <p>${bookDetail.summary}</p>
    `;
  } catch (error) {
    document.getElementById('book-details').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

displayBookDetail();