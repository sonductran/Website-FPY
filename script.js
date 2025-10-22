const uploadContainer = document.querySelector(".upload-container");
const imageUpload = document.getElementById("image-upload");
const imagePreview = document.getElementById("image-preview");

uploadContainer.addEventListener("click", () => {
  imageUpload.click();
});

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// Optional: Add drag-and-drop functionality
uploadContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadContainer.classList.add("hover");
});

uploadContainer.addEventListener("dragleave", () => {
  uploadContainer.classList.remove("hover");
});

uploadContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadContainer.classList.remove("hover");
  const file = e.dataTransfer.files[0];
  if (file) {
    imageUpload.files = e.dataTransfer.files;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});
