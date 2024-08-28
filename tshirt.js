document.querySelectorAll('.image-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        const hoverSrc = this.getAttribute('data-hover');
        this.setAttribute('src', hoverSrc);
    });

    img.addEventListener('mouseout', function() {
        const originalSrc = this.getAttribute('data-original');
        this.setAttribute('src', originalSrc);
    });

    // Store the original src in a data attribute
    img.setAttribute('data-original', img.getAttribute('src'));
});
