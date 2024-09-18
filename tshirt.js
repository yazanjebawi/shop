document.querySelectorAll('.image-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        const hoverSrc = this.getAttribute('data-hover');
        this.setAttribute('src', hoverSrc);
    });

    img.addEventListener('mouseout', function() {
        const originalSrc = this.getAttribute('data-original');
        this.setAttribute('src', originalSrc);
    });

    
    img.setAttribute('data-original', img.getAttribute('src'));
});




function showDashedLine(size) {
    
    document.querySelectorAll('.dashed-line').forEach(line => line.style.display = 'none');
   
    document.getElementById('line-' + size).style.display = 'block';
}



let count = 1;

function increaseCount() {
    if (count < 14) {  
        count++;
        document.getElementById('abyad').innerText = count;
    }
}

function decreaseCount() {
    if (count > 1) { 
        count--;
        document.getElementById('abyad').innerText = count;
    }
}




    const firstButton = document.querySelector('.button-akhdar');
    const hiddenButton = document.getElementById('hiddenButton');

    firstButton.addEventListener('click', function() {
        hiddenButton.style.display = 'inline-block';
    });



    document.getElementById("hiddenButton").addEventListener("click", function() {
        var menu = document.getElementById("menu");
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });




    document.getElementById('button1').addEventListener('click',function(){
        window.location.href='t3sirt.html';
    });





  