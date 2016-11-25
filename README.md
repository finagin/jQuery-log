# jQuery-log
##jQuery module
1. [Install](#install)
1. [Usage](usage)
1. [Demo](demo)

### How to use
#### Install
```html
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<!-- Include jQuery log -->
<script src="https://cdn.rawgit.com/finagin/jQuery-log/master/jQuery-log.min.js"></script>

```
#### Usage
```html
<div>
    <div class="content">
        Content
    </div>
</div>

<script>
    (function($){
  
        $(function(){
    
            $("div")
                .log("Start logging")
                .log("All divs")
                .log()
                .filter(".content")
                .log("Divs with \"content\" class")
                .log()
                .log("End logging");
        
        });
    
    })(jQuery);
</script>
```
#### Demo
<p data-height="265" data-theme-id="light" data-slug-hash="aBwGOR" data-default-tab="result" data-user="finagin" data-embed-version="2" data-pen-title="aBwGOR" class="codepen">See the Pen <a href="http://codepen.io/finagin/pen/aBwGOR/">jQuery-log</a> by Igor (<a href="http://codepen.io/finagin">@finagin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
