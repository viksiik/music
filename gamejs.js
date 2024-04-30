document.addEventListener('DOMContentLoaded', function() {
    let mapAreas = document.querySelectorAll('.map-area');
    let paragraph = document.getElementById('hint'); 

    mapAreas.forEach(function(area) {
        let areaRect = area.getBoundingClientRect();
        let areaLeft = areaRect.left;
        let areaTop = areaRect.top;
        let areaWidth = areaRect.width;
        let areaHeight = areaRect.height;

        area.dataset.areaX = areaLeft + Math.random() * areaWidth;
        area.dataset.areaY = areaTop + Math.random() * areaHeight;

        area.addEventListener('mouseover', function(event) {
            let targetArea = event.target;
            let areaX = parseFloat(targetArea.dataset.areaX);
            let areaY = parseFloat(targetArea.dataset.areaY);

            let mouseX = event.clientX;
            let mouseY = event.clientY;

            let distanceX = Math.abs(mouseX - areaX);
            let distanceY = Math.abs(mouseY - areaY);
            let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            updateColor(targetArea, distance);
        });

        area.addEventListener('mousemove', function(event) {
            let targetArea = event.target;
            let areaX = parseFloat(targetArea.dataset.areaX);
            let areaY = parseFloat(targetArea.dataset.areaY);

            let mouseX = event.clientX;
            let mouseY = event.clientY;

            let distanceX = Math.abs(mouseX - areaX);
            let distanceY = Math.abs(mouseY - areaY);
            let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            updateColor(targetArea, distance);
        });

        area.addEventListener('mouseout', function(event) {
            if (event.relatedTarget !== area) {
                area.style.backgroundColor = 'darkblue';
                paragraph.textContent = 'You`re out of area!';
            }
        });
    });

    function updateColor(area, distance) {
        if (distance <= 10 && distance >= 0){
            area.style.backgroundColor = 'purple';
            paragraph.textContent = 'Wow! You found grandprize!';
        }
        else if (distance <= 100 && distance > 10) {
            area.style.backgroundColor = 'red';
            paragraph.textContent = 'You found treasure! Congratulations!';
        }
        else if (distance <= 200 && distance > 100) {
            area.style.backgroundColor = 'orange';
            paragraph.textContent = 'Hint: hot';
        }
        else if (distance <= 300 && distance > 200) {
            area.style.backgroundColor = 'yellow';
            paragraph.textContent = 'Hint: warm';
        }
        else if (distance <= 400 && distance > 300) {
            area.style.backgroundColor = 'lightgreen';
            paragraph.textContent = 'Hint: cold';
        }
        else if (distance > 400) {
            area.style.backgroundColor = 'lightblue';
            paragraph.textContent = 'Hint: freezing cold';
        }
        else {
            area.style.backgroundColor = 'lightgrey'; 
        }
    }
});