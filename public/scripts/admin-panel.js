document.addEventListener('DOMContentLoaded', (event) => {
  const itemActions = document.querySelectorAll(
    '.panel-action-item, .item-action'
  );
  const panelForm = document.querySelector('.panel-form');

  itemActions.forEach((action) => {
    const actionDataset = action.dataset;
    if (!!actionDataset['submitTarget']) {
      const target = document.querySelector(actionDataset['submitTarget']);
      action.addEventListener('click', (event) => {
        event.preventDefault();
        target.click();
      });
    }

    if (!!actionDataset['removeId'] && !!actionDataset['removeUrl']) {
      const xhr = new XMLHttpRequest();
      xhr.open('delete', actionDataset['removeUrl']);
      // Config header
      xhr.setRequestHeader('Content-type', 'application/json');
      action.addEventListener('click', (event) => {
        event.preventDefault();
        Swal.fire({
          title: 'Bạn có chắc muốn xóa nó không!',
          text: 'Bấm xóa ngay để thực hiện hành độngg này',
          icon: 'info',
          confirmButtonText: 'Xóa ngay',
          denyButtonText: 'Tôi muốn đổi ý',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showDenyButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            xhr.send(null);
          }
        });
      });
      xhr.addEventListener('readystatechange', (state) => {
        if (state.target.status === 200) {
          window.location.reload();
        }
      });
    }
  });

  if (!!panelForm) {
    const xhr = new XMLHttpRequest();

    const method = panelForm.getAttribute('method');
    const actionUrl = panelForm.getAttribute('action');
    const redirectUrl = panelForm.dataset['redirect'];
    const body = {};

    panelForm.addEventListener('submit', (event) => {
      event.preventDefault();
      xhr.open(method, actionUrl);
      // Config header
      xhr.setRequestHeader('Content-type', 'application/json');
      // Serialize
      panelForm
        .querySelectorAll('.panel-form-input, .panel-form-textarea')
        .forEach((input) => {
          const inputValue = input.value;
          const inputName = input.getAttribute('name');

          body[inputName] = inputValue;
        });

      xhr.send(JSON.stringify(body));
    });

    xhr.addEventListener('readystatechange', (state) => {
      if (state.target.status === 200) {
        window.location.replace(redirectUrl);
      }
    });
  }
});
