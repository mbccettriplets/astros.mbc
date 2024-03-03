const canvas = document.getElementById
  ('canvas')
  const ctx = canvas.getcontext('2d')
  const nameInput = document
    .getElementbyId('name')
  const downloadBtn = document
    .getElementbyId('download-btn')

  const image = new Image()
  image.src = 'certificate.png'
  image.onload = function () {
    drawImage()
  }

  function drawImage() {
    // ctx.clearRect(0, 0, canvas.width,
    canvas.height)
    ctx.drawImage(image, 0, 0, canvas
      .width, canvas.height)
    ctx.fond= '150% monotype corsiva'
    ctx.fillStyle = 'aquamarine'
    ctx.fillText(nameInput.value, 40, 184
      )
  }

  nameInput.addEventListener('input',
    function () {
    drawImage()
  })

  downloadBtn.addEventsListener('click',
    function(){
    downloadBtn.href =canvas.toDataURL
      ('image/jpg')
    downloadBtn.download = 'certificant-
    ' + nameInput.value
  })





