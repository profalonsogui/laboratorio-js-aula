/* =========================================================
   Conteúdo das lições — a página inteira é gerada a partir
   deste array de objetos (lição 06 na prática).
   ========================================================= */
   var LICOES = [
    {
      id: 'variaveis',
      titulo: 'Variáveis e tipos',
      resumo: '<p>Variável é um <mark>nome que guarda um valor</mark>. Use <code class="inline">const</code> quando o valor não vai mudar e <code class="inline">let</code> quando vai. Esqueça <code class="inline">var</code>.</p>' +
              '<p>O operador <code class="inline">typeof</code> mostra o tipo do valor: texto (<code class="inline">string</code>), número (<code class="inline">number</code>) ou verdadeiro/falso (<code class="inline">boolean</code>).</p>',
      codigo: [
        "let nome = 'Ana';",
        "const idade = 17;",
        "let cursando = true;",
        "",
        "console.log(nome, idade, cursando);",
        "console.log(typeof nome, typeof idade, typeof cursando);",
        "",
        "nome = 'Ana Paula';   // let permite trocar o valor",
        "console.log(nome);"
      ],
      desafio: 'Troque <code class="inline">const idade</code> por <code class="inline">let</code>, mude o valor depois e rode. Agora volte para <code class="inline">const</code> e tente mudar de novo: leia com atenção o erro que aparece.'
    },
    {
      id: 'strings',
      titulo: 'Texto, números e template literals',
      resumo: '<p>Para juntar texto e valores existem dois caminhos: o <code class="inline">+</code> (concatenação) e o <mark>template literal</mark>, escrito entre acentos graves com <code class="inline">${ }</code> no lugar dos valores.</p>' +
              '<p>O segundo caminho é mais legível e é o que você vai usar para montar HTML por código, mais adiante.</p>',
      codigo: [
        "const aluno = 'Bruno';",
        "const nota1 = 7.5;",
        "const nota2 = 9;",
        "const media = (nota1 + nota2) / 2;",
        "",
        "console.log('Aluno: ' + aluno + ' | media: ' + media);",
        "console.log(`Média de ${aluno}: ${media}`);",
        "console.log(`Com uma casa: ${media.toFixed(1)}`);",
        "console.log(aluno.toUpperCase(), aluno.length);"
      ],
      desafio: 'Crie uma <code class="inline">nota3</code>, recalcule a média com três notas e escreva a frase final usando template literal.'
    },
    {
      id: 'condicionais',
      titulo: 'Condicionais: o programa decide',
      resumo: '<p><code class="inline">if / else if / else</code> testa condições em ordem e executa <mark>o primeiro bloco cuja condição é verdadeira</mark>.</p>' +
              '<p>Para decisões de duas saídas existe um atalho, o operador ternário: <code class="inline">condição ? valorSeVerdadeiro : valorSeFalso</code>.</p>',
      codigo: [
        "const media = 6.2;",
        "",
        "if (media >= 7) {",
        "  console.log('Aprovado');",
        "} else if (media >= 5) {",
        "  console.log('Recuperação');",
        "} else {",
        "  console.log('Reprovado');",
        "}",
        "",
        "const situacao = media >= 7 ? 'Aprovado' : 'Não aprovado';",
        "console.log('Ternário:', situacao);"
      ],
      desafio: 'Mude o valor de <code class="inline">media</code> três vezes para cair em cada um dos três caminhos. Depois acrescente a regra: nota exatamente 5 vai para recuperação, abaixo de 5 reprova.'
    },
    {
      id: 'funcoes',
      titulo: 'Funções: código que você reaproveita',
      resumo: '<p>Função é um <mark>bloco de código com nome</mark> que recebe dados (parâmetros) e devolve um resultado com <code class="inline">return</code>. Sem <code class="inline">return</code>, a função devolve <code class="inline">undefined</code>.</p>' +
              '<p>Existem duas formas comuns de escrever: a declaração clássica e a arrow function. Fazem a mesma coisa nestes exemplos.</p>',
      codigo: [
        "function calcularMedia(a, b) {",
        "  return (a + b) / 2;",
        "}",
        "",
        "const situacao = (nota) => nota >= 7 ? 'Aprovado' : 'Recuperação';",
        "",
        "const m = calcularMedia(8, 5);",
        "console.log('Média:', m);",
        "console.log('Situação:', situacao(m));",
        "",
        "function semRetorno() { const x = 10; }",
        "console.log('Sem return devolve:', semRetorno());"
      ],
      desafio: 'Reescreva <code class="inline">calcularMedia</code> para aceitar três notas. Depois faça uma versão com peso: a primeira nota vale 2, as outras valem 1.'
    },
    {
      id: 'arrays',
      titulo: 'Arrays: listas de valores',
      resumo: '<p>Array é uma <mark>lista ordenada</mark>. O primeiro item é a posição <code class="inline">0</code>. <code class="inline">forEach</code> passa por todos, <code class="inline">filter</code> devolve só os que passam num teste e <code class="inline">map</code> devolve uma lista nova transformada.</p>' +
              '<p>Guarde estes três: são a base de qualquer listagem em tela.</p>',
      codigo: [
        "const cursos = ['Desenvolvimento de Sistemas', 'Administração', 'Logística', 'Enfermagem'];",
        "",
        "console.log('Total:', cursos.length);",
        "console.log('Primeiro:', cursos[0]);",
        "",
        "cursos.forEach(function (curso, i) {",
        "  console.log(i + 1, curso);",
        "});",
        "",
        "const comA = cursos.filter(c => c.startsWith('A'));",
        "console.log('Começam com A:', comA);",
        "",
        "const tamanhos = cursos.map(c => c.length);",
        "console.log('Tamanhos:', tamanhos);"
      ],
      desafio: 'Adicione dois cursos à lista. Depois use <code class="inline">filter</code> para mostrar só os nomes com mais de 10 letras.'
    },
    {
      id: 'objetos',
      titulo: 'Objetos e JSON',
      resumo: '<p>Objeto guarda <mark>pares de nome e valor</mark>. Acesse com ponto (<code class="inline">curso.nome</code>) ou com colchetes (<code class="inline">curso[\'nome\']</code>).</p>' +
              '<p>Um array de objetos é o formato em que dados reais chegam na sua página — e <code class="inline">JSON.stringify</code> mostra esse objeto como texto, exatamente o formato de um arquivo <code class="inline">.json</code>.</p>',
      codigo: [
        "const curso = {",
        "  nome: 'Desenvolvimento de Sistemas',",
        "  eixo: 'Informação e Comunicação',",
        "  duracao: 3,",
        "  noturno: true",
        "};",
        "",
        "console.log(curso.nome);",
        "console.log(curso['eixo']);",
        "",
        "curso.vagas = 40;   // cria uma propriedade nova",
        "console.log('Propriedades:', Object.keys(curso));",
        "console.log(JSON.stringify(curso, null, 2));"
      ],
      desafio: 'Crie um segundo objeto <code class="inline">curso2</code> e coloque os dois dentro de um array. Depois use <code class="inline">forEach</code> para escrever o nome de cada um.'
    },
    {
      id: 'dom',
      titulo: 'DOM: mexendo no HTML por código',
      resumo: '<p>Seu HTML virou uma árvore de objetos que o JavaScript enxerga: o <mark>DOM</mark>. Você busca um elemento com <code class="inline">document.querySelector</code> e altera o que quiser: <code class="inline">textContent</code> troca o texto, <code class="inline">classList</code> mexe nas classes CSS, <code class="inline">innerHTML</code> substitui o conteúdo inteiro.</p>' +
              '<p>O palco abaixo é HTML de verdade desta página, com os ids <code class="inline">#titulo-dom</code> e <code class="inline">#caixa-dom</code>. Ele é restaurado a cada vez que você roda.</p>',
      palco: '<h4 id="titulo-dom">Texto original, escrito no HTML</h4>' +
             '<div id="caixa-dom" class="palco-caixa">Conteúdo original da caixa</div>',
      codigo: [
        "const titulo = document.querySelector('#titulo-dom');",
        "titulo.textContent = 'Texto trocado pelo JavaScript';",
        "titulo.classList.add('destaque');",
        "",
        "const caixa = document.querySelector('#caixa-dom');",
        "caixa.innerHTML = '<p>Parágrafo criado por código.</p>';",
        "",
        "console.log('Elemento encontrado:', titulo.tagName);"
      ],
      desafio: 'Faça o título mostrar a data de hoje usando <code class="inline">new Date().toLocaleDateString(\'pt-BR\')</code>. Depois troque <code class="inline">textContent</code> por <code class="inline">innerHTML</code> passando <code class="inline">&lt;em&gt;texto&lt;/em&gt;</code> e compare o resultado.'
    },
    {
      id: 'eventos',
      titulo: 'Eventos: reagir ao usuário',
      resumo: '<p><code class="inline">addEventListener</code> diz ao elemento: <mark>quando isso acontecer, execute esta função</mark>. O evento mais comum é <code class="inline">click</code>, mas existem <code class="inline">input</code>, <code class="inline">submit</code>, <code class="inline">keydown</code> e muitos outros.</p>' +
              '<p>Rode o código e depois clique no botão do palco. A variável <code class="inline">cliques</code> continua viva entre os cliques — é ela que guarda o estado.</p>',
      palco: '<button type="button" id="btn-evento" class="btn-palco">Clique em mim</button>' +
             '<p id="msg-evento" class="palco-msg">Nenhum clique ainda.</p>',
      codigo: [
        "const botao = document.querySelector('#btn-evento');",
        "const msg = document.querySelector('#msg-evento');",
        "let cliques = 0;",
        "",
        "botao.addEventListener('click', function () {",
        "  cliques = cliques + 1;",
        "  msg.textContent = `Você clicou ${cliques} vez(es)`;",
        "  console.log('clique número', cliques);",
        "});",
        "",
        "console.log('Pronto. Agora clique no botão do palco.');"
      ],
      desafio: 'Faça o botão trocar o próprio texto depois do primeiro clique. Em seguida, acrescente uma condição: ao chegar em 5 cliques, mostrar uma mensagem diferente.'
    },
    {
      id: 'jquery',
      titulo: 'jQuery: o mesmo trabalho, menos código',
      resumo: '<p>jQuery é uma <mark>biblioteca</mark>: JavaScript já escrito que alguém empacotou para você. O <code class="inline">$(seletor)</code> busca elementos usando a mesma sintaxe do CSS e devolve um objeto com métodos prontos, que podem ser encadeados.</p>' +
              '<p>Compare com o que você escreveu nas lições 07 e 08:</p>' +
              '<div class="estatico">// JS puro\nconst t = document.querySelector(\'#titulo\');\nt.textContent = \'Novo texto\';\nt.classList.add(\'destaque\');\n\n// jQuery\n$(\'#titulo\').text(\'Novo texto\').addClass(\'destaque\');</div>' +
              '<p>Menos linhas não significa mágica: o jQuery faz exatamente o que você fez à mão. Por isso a ordem importa — primeiro o DOM, depois o atalho.</p>',
      palco: '<h4 id="titulo-jq">Título esperando o jQuery</h4>' +
             '<button type="button" id="btn-jq" class="btn-palco">Clique (jQuery)</button>' +
             '<p id="msg-jq" class="palco-msg" style="display:none">Clicou! Isso apareceu com fadeIn().</p>',
      codigo: [
        "$('#titulo-jq').text('Trocado com jQuery').addClass('destaque');",
        "",
        "$('#btn-jq').on('click', function () {",
        "  $('#msg-jq').fadeIn(250);",
        "  console.log('clique via jQuery');",
        "});",
        "",
        "console.log('Três linhas fizeram o trabalho de oito.');"
      ],
      desafio: 'Troque <code class="inline">fadeIn</code> por <code class="inline">slideDown</code> e depois por <code class="inline">fadeToggle</code>. Em seguida escreva a versão em JS puro do mesmo efeito e conte quantas linhas ficou.'
    },
    {
      id: 'dados',
      titulo: 'Dados na tela: o projeto do semestre',
      resumo: '<p>Aqui tudo se junta: um <mark>array de objetos</mark> vira HTML dentro da página. É exatamente assim que a listagem de cursos do site vai funcionar — os dados ficam num arquivo separado e a tela é montada por código.</p>' +
              '<p>Em produção, o array viria de fora com <code class="inline">$.getJSON(\'dados/cursos.json\', ...)</code>. A parte que monta a tela é esta mesma.</p>',
      palco: '<ul id="lista-cursos" class="lista-cursos"><li class="card-curso"><strong>Lista vazia</strong><span>rode o código para preencher</span></li></ul>',
      codigo: [
        "const cursos = [",
        "  { nome: 'Desenvolvimento de Sistemas', eixo: 'Informação e Comunicação', vagas: 40 },",
        "  { nome: 'Administração', eixo: 'Gestão e Negócios', vagas: 35 },",
        "  { nome: 'Logística', eixo: 'Gestão e Negócios', vagas: 30 }",
        "];",
        "",
        "const $lista = $('#lista-cursos').empty();",
        "",
        "$.each(cursos, function (i, curso) {",
        "  $lista.append(",
        "    `<li class=\"card-curso\"><strong>${curso.nome}</strong>` +",
        "    `<span>${curso.eixo} · ${curso.vagas} vagas</span></li>`",
        "  );",
        "});",
        "",
        "console.log(`${cursos.length} cursos renderizados na tela.`);"
      ],
      desafio: 'Acrescente mais dois cursos ao array. Depois renderize só os do eixo Gestão e Negócios, usando <code class="inline">filter</code> antes do <code class="inline">$.each</code>. Esse é o filtro por eixo do site da escola.'
    }
  ];
  
  /* =========================================================
     Motor da página
     ========================================================= */
  $(function () {
    var $licoes = $('#licoes');
    var $indice = $('#indice-lista');
    var totalRegistro = 0;
  
    function doisDigitos(n) {
      return n < 10 ? '0' + n : String(n);
    }
  
    // monta índice e lições
    $.each(LICOES, function (i, licao) {
      var num = doisDigitos(i + 1);
  
      $indice.append(
        '<li><a href="#licao-' + licao.id + '" data-licao="' + num + '">' +
        '<span class="n">' + num + '</span><span>' + licao.titulo + '</span></a></li>'
      );
  
      var palco = '';
      if (licao.palco) {
        palco = '<div class="palco" data-palco="' + licao.id + '">' +
                '<span class="palco-rotulo">palco — HTML de verdade, restaurado a cada execução</span>' +
                licao.palco + '</div>';
      }
  
      $licoes.append(
        '<article class="licao" id="licao-' + licao.id + '">' +
          '<span class="licao-num">lição ' + num + '</span>' +
          '<h3>' + licao.titulo + '</h3>' +
          '<div class="resumo">' + licao.resumo + '</div>' +
          '<div class="editor">' +
            '<div class="editor-cab"><span>código editável</span>' +
            '<span class="dica-teclado">Ctrl + Enter roda</span></div>' +
            '<textarea class="codigo" spellcheck="false" data-licao="' + num + '" ' +
            'rows="' + Math.min(licao.codigo.length + 1, 18) + '">' +
            escaparHTML(licao.codigo.join('\n')) +
            '</textarea>' +
          '</div>' +
          '<div class="acoes">' +
            '<button class="btn js-rodar" type="button">Rodar</button>' +
            '<button class="btn secundario js-restaurar" type="button">Restaurar código</button>' +
          '</div>' +
          palco +
          '<div class="saida" aria-live="polite"><span class="vazio">A saída aparece aqui.</span></div>' +
          '<p class="desafio"><b>Desafio</b>' + licao.desafio + '</p>' +
        '</article>'
      );
  
      // guarda o código e o palco originais para o botão Restaurar
      $('#licao-' + licao.id).data('original', licao.codigo.join('\n'));
      if (licao.palco) {
        $('#licao-' + licao.id).data('palcoOriginal', licao.palco);
      }
    });
  
    function escaparHTML(txt) {
      return String(txt)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
  
    // transforma qualquer valor em texto legível para a saída
    function formatar(valor) {
      if (typeof valor === 'string') return valor;
      if (valor === undefined) return 'undefined';
      if (valor === null) return 'null';
      if (typeof valor === 'number' || typeof valor === 'boolean') return String(valor);
      if (typeof valor === 'function') return 'function ' + (valor.name || 'anônima') + '()';
      if (valor instanceof Element) return '<' + valor.tagName.toLowerCase() + '>';
      try {
        return JSON.stringify(valor, null, 2);
      } catch (e) {
        return String(valor);
      }
    }
  
    function registrar(tag, texto, falhou) {
      var $corpo = $('#registro-corpo');
      $corpo.find('.nada').remove();
      $corpo.append(
        $('<div class="item"></div>')
          .append($('<span class="tag"></span>').text(tag))
          .append($('<span class="txt"></span>').addClass(falhou ? 'falha' : '').text(texto))
      );
      $corpo.scrollTop($corpo[0].scrollHeight);
      totalRegistro++;
      $('#registro-contador').text(totalRegistro);
      if ($corpo.children('.item').length > 250) {
        $corpo.children('.item').first().remove();
      }
    }
  
    function rodar($botao) {
      var $bloco = $botao.closest('.licao, .repl');
      var $area = $bloco.find('textarea.codigo').first();
      var $saida = $bloco.find('.saida').first();
      var tag = 'L' + ($area.data('licao') || '00');
      var codigo = $area.val();
  
      // restaura o palco: garante que cada execução comece limpa,
      // sem eventos duplicados da execução anterior
      var $palco = $bloco.find('[data-palco]');
      if ($palco.length && $bloco.data('palcoOriginal')) {
        $palco.find('.palco-rotulo').nextAll().remove();
        $palco.append($bloco.data('palcoOriginal'));
      }
  
      var linhas = [];
      var consoleFalso = {
        log: function () {
          linhas.push({ texto: $.map(arguments, formatar).join(' '), tipo: 'linha' });
        },
        warn: function () {
          linhas.push({ texto: $.map(arguments, formatar).join(' '), tipo: 'aviso' });
        },
        error: function () {
          linhas.push({ texto: $.map(arguments, formatar).join(' '), tipo: 'falha' });
        },
        info: function () {
          linhas.push({ texto: $.map(arguments, formatar).join(' '), tipo: 'linha' });
        },
        table: function (v) {
          linhas.push({ texto: formatar(v), tipo: 'linha' });
        },
        clear: function () { linhas.length = 0; }
      };
  
      var falhou = false;
      try {
        var fn = new Function('console', '$', 'jQuery', codigo);
        var retorno = fn(consoleFalso, jQuery, jQuery);
        if (retorno !== undefined) {
          linhas.push({ texto: formatar(retorno), tipo: 'linha' });
        }
      } catch (erro) {
        falhou = true;
        linhas.push({ texto: erro.name + ': ' + erro.message, tipo: 'falha' });
      }
  
      // pinta a saída do bloco
      $saida.empty();
      if (!linhas.length) {
        $saida.append('<span class="vazio">Rodou sem erros, mas nada foi exibido. Use console.log() para ver valores.</span>');
        registrar(tag, 'rodou sem saída', false);
      } else {
        $.each(linhas, function (i, l) {
          $saida.append($('<span class="linha"></span>').addClass(l.tipo === 'linha' ? '' : l.tipo).text(l.texto));
          registrar(tag, l.texto, l.tipo === 'falha');
        });
      }
  
      // marca a lição como visitada no índice
      if (!falhou) {
        $('#indice-lista a[data-licao="' + tag.replace('L', '') + '"]').addClass('feito');
      }
    }
  
    // ações
    $(document).on('click', '.js-rodar', function () {
      rodar($(this));
    });
  
    $(document).on('click', '.js-restaurar', function () {
      var $licao = $(this).closest('.licao');
      $licao.find('textarea.codigo').val($licao.data('original'));
      $licao.find('.saida').html('<span class="vazio">Código restaurado. Clique em Rodar.</span>');
      var $palco = $licao.find('[data-palco]');
      if ($palco.length && $licao.data('palcoOriginal')) {
        $palco.find('.palco-rotulo').nextAll().remove();
        $palco.append($licao.data('palcoOriginal'));
      }
    });
  
    // Ctrl/Cmd + Enter roda; Tab insere dois espaços em vez de sair do campo
    $(document).on('keydown', 'textarea.codigo', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        rodar($(this).closest('.licao, .repl').find('.js-rodar').first());
        return;
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        var el = this;
        var ini = el.selectionStart;
        var fim = el.selectionEnd;
        el.value = el.value.substring(0, ini) + '  ' + el.value.substring(fim);
        el.selectionStart = el.selectionEnd = ini + 2;
      }
    });
  
    $('#limpar-registro').on('click', function () {
      $('#registro-corpo').html('<p class="nada">Registro limpo.</p>');
      totalRegistro = 0;
      $('#registro-contador').text('0');
    });
  
    $('#alternar-registro').on('click', function () {
      var fechado = $('#registro').toggleClass('fechado').hasClass('fechado');
      $(this).attr('aria-expanded', !fechado);
    });
  });