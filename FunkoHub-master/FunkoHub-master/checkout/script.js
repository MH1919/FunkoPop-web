let a =document.getElementById("name").innerHTML.value;

if(a==null){
document.getElementById("check").onclick=function () {
 
    Swal.fire({
        title: 'Thank You for Your Purchase',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
      
      
  
}
}