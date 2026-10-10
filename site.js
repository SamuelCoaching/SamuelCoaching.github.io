document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));

// Commande sur demande : e-mail pré-rempli, ou message copié puis ouverture de la conversation Instagram
document.querySelectorAll('.commande').forEach(bloc=>{
  const prog=bloc.dataset.prog;
  const message=bloc.dataset.message||`Salut Sam ! Je voudrais commander le programme ${prog}. Tu peux m'envoyer le lien de paiement ? Merci !`;
  const sujet=bloc.dataset.sujet||('Commande – '+prog);
  bloc.querySelector('.js-mail').href='mailto:samuel.coaching.pro@gmail.com?subject='+encodeURIComponent(sujet)+'&body='+encodeURIComponent(message);
  const insta=bloc.querySelector('.js-insta');
  insta.href='https://ig.me/m/coach.saam?text='+encodeURIComponent(message); // paramètre non officiel : ignoré si Instagram ne le gère pas
  insta.addEventListener('click',()=>{
    const fini=()=>{const t=document.getElementById('toast');t.classList.add('visible');setTimeout(()=>t.classList.remove('visible'),6000)};
    if(navigator.clipboard){navigator.clipboard.writeText(message).then(fini,fini)}else{fini()}
  });
});
