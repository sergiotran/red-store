document.addEventListener('DOMContentLoaded', () => {
  const fileUploaders = document.querySelectorAll('.panel-image-uploader');
  const xhr = new XMLHttpRequest();

  const handleChangeFile = (uploader) => {
    const preview = uploader.querySelector('.preview');
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
          image.src = path;
          const image = new Image();
          preview.appendChild(image);
        }
      });
    };
  };

  fileUploaders.forEach((fileUploader) => {
    const fileLabel = fileUploader.querySelector('label');
    const fileInput = fileUploader.querySelector('input[type="file"]');
    fileLabel.addEventListener('click', (event) => {
      console.log(event);
    });
    fileInput.addEventListener('change', handleChangeFile(fileUploader));
  });
});
