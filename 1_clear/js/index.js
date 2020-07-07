document.querySelector('body').onload = () => {

  const canvas = document.getElementById('webgl');
  const gl = getWebGLContext(canvas);

  function main() {
    if (!gl) {
      console.log(`gl не загружен!`);
      return;
    }

    gl.clearColor(0.6, 0.0, 0.1, 0.2);

    // COLOR_BUFFER_BIT -  для очистки области рисования он должен использовать буфер цвета. Т.е есть ещё много других
    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  main()

}
