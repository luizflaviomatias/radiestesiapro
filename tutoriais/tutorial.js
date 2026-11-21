// Capítulos do tutorial: cada botão leva o vídeo até o trecho e começa a tocar; o capítulo em exibição fica marcado.
for (const secao of document.querySelectorAll('[data-tutorial]')) {
  const video = secao.querySelector('video');
  const botoes = [...secao.querySelectorAll('button[data-tempo]')];
  const inicioDe = (botao) => Number(botao.dataset.tempo);

  for (const botao of botoes) {
    botao.addEventListener('click', () => {
      video.currentTime = inicioDe(botao);
      video.play().catch(() => {});
    });
  }

  video.addEventListener('timeupdate', () => {
    const atual = botoes.filter((botao) => inicioDe(botao) <= video.currentTime + 0.2).at(-1);
    for (const botao of botoes) {
      if (botao === atual) botao.setAttribute('aria-current', 'true');
      else botao.removeAttribute('aria-current');
    }
  });
}
