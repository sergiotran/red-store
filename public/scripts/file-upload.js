document.addEventListener('DOMContentLoaded', () => {
  let selectedImages = [];
  const fileUploaders = document.querySelectorAll('.panel-image-uploader');
  const xhr = new XMLHttpRequest();

  const handleChangeFile = (uploader, multiple = false) => {
    const preview = uploader.querySelector('.preview');
    const hiddenInput = uploader.querySelector('.panel-form-input');
    return (event) => {
      const files = event.target.files;
      if (files) {
        const selectedFile = files[0];
        const formData = new FormData();
        formData.append('media', selectedFile);
        xhr.open('POST', '/media/upload/single', true);
        xhr.send(formData);
      }
      xhr.addEventListener('readystatechange', (event) => {
        if (event.target.status === 200 && event.target.response) {
          const { file } = JSON.parse(event.target.response || '{}');
          const path = `/${file.path.split('\\').splice(1).join('/')}`;
          if (multiple) {
            selectedImages.push(path);
            selectedImages = [...new Set(selectedImages)];
            preview.innerHTML = selectedImages
              .map((img) => `<img src='${img}'>`)
              .join('');
            hiddenInput.value = selectedImages.join(',');
          } else {
            preview.innerHTML = `<img src='${path}'>`;
            hiddenInput.value = path;
          }
        }
      });
    };
  };

  fileUploaders.forEach((fileUploader) => {
    const fileUploaderData = fileUploader.dataset;
    fileUploader.innerHTML = `
      <label>
        <div class="icon">
          <div>${fileUploaderData.title}</div>
          <i class="fa-solid fa-image"></i>
        </div>
        <div class="preview"></div>
        <div class='content'>
          <input type="file" ${
            JSON.parse(fileUploaderData.multiple) ? 'multiple' : ''
          } />
          <input
            name='${fileUploaderData.fieldName}'
            type='hidden'
            required
            class='panel-form-input'
          />
        </div> 
      </label>
    `;
    fileUploader
      .querySelector('input[type="file"]')
      .addEventListener(
        'change',
        handleChangeFile(fileUploader, JSON.parse(fileUploaderData.multiple))
      );
  });
});
