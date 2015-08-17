$(document).ready(function() {
  alert('hljs init is running');
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
