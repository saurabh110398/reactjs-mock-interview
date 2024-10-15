//  <!-- User click ==> Create a circle of random radius. -->
// <!-- Click again -==> Ceate another circle of random radius. -->
// <!-- At a time only 2 circles can be there. -->
// <!-- Click again  --==> New circle will be created and the previous ones are deleted. -->
// <!-- We have to check weather 2 circles are intersecting or not.  -->


let params = []
document.addEventListener('click', (e) => {

    const items = document.querySelectorAll(".circles");

    if (items.length == 2) {
        console.log('--1--');

        items.forEach(ele => {
            document.body.removeChild(ele)
        })
        console.log('ppppp : ', params);
        
        
       console.log('condition ::', Math.hypot(params[0].x - params[1].x, params[0].y - params[1].y) <= params[0].radius + params[1].radius);
       params.length=0;

    }
    let circle = document.createElement('div');
    circle.className = 'circles';
    

    console.log('--2--');

    // console.log(circle);

    circle.style.border = '2px solid red';
    // let radius = Math.ceil(Math.random() * 10 + 1) + 100 + 'px';
    let radius ='100px'
    circle.style.width = radius;
    circle.style.height = radius;
    circle.style.borderRadius = '50%'
    let x = e.clientX - 50 + 'px';
    let y = e.clientY - 50 + 'px';
    params.push({ x, y, radius })

    // console.log('hhhhh22 : ',h);
    // console.log('Position x:: ', x)
    // console.log('Position y:: ', y)
    circle.style.position = 'fixed';
    circle.style.left = x;
    circle.style.top = y;
    document.body.appendChild(circle)
})



