$(function(){
// Declarando função no Jquery
$('li').bind('click', function(){
// Fazendo uma função de click nas abas (listas)
$('li').attr({'aria-selected': false});
// Pegando a flag false do aria-selected
$(this).attr({'aria-selected': true});
// Setando para true ao ser selecionada (clicada) na <li>
var painel = $(this).attr('aria-controls');
// Selecionando as abas com  aria-controls
$('div[role="tabpanel"]').attr('aria-hidden', true);
// Pegando as divs com aria-hidden true para mostrar
$('#'+painel).attr('aria-hidden', false);
// colocando para false as abas
});
$("li[role='tab']").keydown(function(ev){
// função para add click com enter
if (ev.which ==13) {
// pega o código do enter 13
$(this).click()
// Adiciona função de click
}
});
 });
