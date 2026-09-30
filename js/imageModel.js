const imageModal = document.getElementById("imageModal");
        const imageModalImg = document.getElementById("imageModalImg");
        const imageModalClose = document.getElementById("imageModalClose");

        document.querySelectorAll(".image-preview").forEach(image => {
            image.addEventListener("click", () => {
                imageModalImg.src = image.src;
                imageModalImg.alt = image.alt;
                imageModal.classList.add("active");
                document.body.classList.add("image-modal-open");
            });
        });

        function closeImageModal(){
            imageModal.classList.remove("active");
            document.body.classList.remove("image-modal-open");
        }

        imageModalClose.addEventListener("click", closeImageModal);

        imageModal.querySelector(".image-modal-bg").addEventListener("click", closeImageModal);

        document.addEventListener("keydown", event => {
            if(event.key === "Escape" && imageModal.classList.contains("active")){
                closeImageModal();
            }
        });