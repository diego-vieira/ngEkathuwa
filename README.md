ngBsmodal - v0.1.2
==========

#### Angularjs Bootstrap 3 Modal service - Ekathuwa
==============================================
[Examples: ngBsmodal](http://plnkr.co/ebDtSMw6w0IZquaglEMe)

###### This given you to easily handle Bootstrap 3 Modal window with Angularjs.
###### It is more flexible...
###### It is responsive...
###### Can be use custom sizes...
###### Working with templates...
###### It used promisses when you need...
###### You can dynamically show/hide...

#### Getting Start

1. Include `<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">` in the head of your document.
2. Include `<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular.min.js"></script>`
3. Include ` <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>`
4. Then include `bsmodal.min.js`
5. Declare a module dependency, in your module `'[ngBsmodal']`
6. Declare a controller dependency, in your controller `$bsmodal`
7. Then use it `$bsmodal.modal(options)`



#### Ekathuwa API and examples
=============================

##### ngBsmodal Options
<pre>
Default options
-------------------------
id:                (string)    "bsmodalModalID"
scope:                         $rootScope
controller:        (string)    null
show:              (boolean)   true
backdrop:          (boolean)   true
keyboard:          (boolean)   true
remote:            (boolean)   false
contentStyle:      (string)    null
contentCustomSize: (number)    0
contentPreSize:    (string)    "df", //df,sm,md,lg,fl
templateURL:       (string)    null
templateHTML:      (string)    null
bodyTemplateURL:   (string)    null
bodyTemplate:      (string)    null
header:            (boolean)   true
headerClass:       (string)    " "  //css style class
headerText:        (string)    null
headerTemplate:    (string)    null
headerCloseBtn:    (boolean)   true
footer:            (boolean)   true
footerClass:       (string)    " "  //css style class
footerTemplate:    (string)    null
footerCloseBtn:    (boolean)   true
footerSaveBtn:     (boolean)   false
</pre>

    //Basic Modal
    $scope.bsmodalModalBasic = function () {
        $bsmodal.modal({
            id: "bsmodalModalBasicId",
            headerText:"Ekathuwa modal header",
        });
    }

    //Fullscreen Modal
    $scope.bsmodalModalTemp = function () {
        $bsmodal.modal({
            id: "bsmodalModalTempId",
            scope: $scope,
            templateURL: "modal-template.html",
            contentPreSize: "fl"
        });
    }

    //Modal by template with stylish(350px width overwrite from 80%)
    $scope.bsmodalModalStyle = function () {
        $bsmodal.modal({
            id: "bsmodalModalTempId",
            scope: $scope,
            templateURL: "modal-template.html",
            contentStyle: "width:350px;heigth:400px;background-color:#1b78f7;",
            contentCustomSize: 80
        });
    }

    //Large screen modal with inline html
    $scope.bsmodalModalTempHTML = function () {
        $bsmodal.modal({
            id: "bsmodalTemlHTMLId",
            scope: $scope,
            contentPreSize: "lg",
            templateHTML: '<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal fade" id="bsmodalTemlHTMLId" style="display: none;"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">x</button><h4 id="myModalLabel" class="modal-title">Ekathuwa Modal Heading</h4></div><div class="modal-body"><h4>Ekathuwa modal body.</h4><button class="btn btn-warning" ng-click="btnMsgFromCntl()">Get Message</button><div class="modal-footer"><button data-dismiss="modal" class="btn btn-default" type="button">Close</button><button class="btn btn-primary" type="button">Save changes</button></div></div></div></div>'
        });
    }

    //Modal body from template and set header text
    $scope.bsmodalModalBodyTempURL = function () {
        $bsmodal.modal({
            id: "bsmodalBodyTempLId",
            scope: $scope,
            headerText:"Ekathuwa modal header",
            bodyTemplateURL: 'modal-template-body.html'
        });
    }

    //Footerless modal
    $scope.bsmodalModalFooterless = function () {
        $bsmodal.modal({
            id: "bsmodalBodyTempLId",
            scope: $scope,
            headerText:"Ekathuwa modal header",
            bodyTemplateURL: 'modal-template-body.html',
            footer:false
        });
    }

    //Headerless modal
    $scope.bsmodalModalHeaderless = function () {
        $bsmodal.modal({
            id: "bsmodalBodyTempLId",
            scope: $scope,
            bodyTemplateURL: 'modal-template-body.html',
            header:false
        });
    }

    //Header/Footer stylish from css class modal
    //Usefull for set your all modals header to same style
    $scope.bsmodalModalHeaderless = function () {
        $bsmodal.modal({
            id: "bsmodalBodyTempLId",
            scope: $scope,
            bodyTemplateURL: 'modal-template-body.html',
            headerClass : "ribbon blue",  //set your css class
            footerClass : "color-footer blue"  //set your css class
        });
    }

    //Modal via template body Url and show hide with promisess
    $scope.bsmodalModalPromisses = function () {
       var promise = $bsmodal.modal({
            id: "bsmodalPromisId",
            show: false,
            scope: $scope,
            bodyTemplateURL: 'modal-template-body.html',
            headerText:"Modal with promisses"
        });
        promise.then(function (elem) {
            elem.modal('show');
        });
    }

<table>
    <tr>
        <th width="10%">Option</th>
        <th width="10%">Value</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td>
            <code>id</code>
        </td>
        <td>
            <code>default: bsmodalModalID</code>
        </td>
        <td>Set your modal ID.
            <br/>Id avoid namespace collisions.Most important, when modal inside modal(nested modal)</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({id:"yourModalId"});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>scope</code>
        </td>
        <td>
            <code>default: $rootScope</code>
        </td>
        <td>Pass your scope.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({scope:$scope});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>controller</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Pass your controller.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({controller:"bsmodalModalCtl"});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>show</code>
        </td>
        <td>
            <code>default: true</code>
        </td>
        <td>Shows the modal when initialized.
            <br/>You can show/hide modal using promisses.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>var p = $bsmodal.modal({id:"modalPromisses",show:false});</pre>
            <pre>$q.when(p).then(function (m) { m.modal('show'); });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>backdrop</code>
        </td>
        <td>
            <code>default: true</code>
        </td>
        <td>Includes a modal-backdrop element. Alternatively, specify
            <code>static</code>for a backdrop which doesn't close the modal on click.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({backdrop:"static"});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>keyboard</code>
        </td>
        <td>
            <code>default: true</code>
        </td>
        <td>Closes the modal when escape key is pressed</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({keyboard:false});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>contentStyle</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Set modal style.If you set
            <code>width</code>, modal not be responsive. Use "
            <code>;</code>" for style seperation.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({id:"yourModalId",contentStyle:"width:350px;heigth:400px;background-color:red;"});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>contentCustomSize</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Set modal percentage(%) width. Not need to mention "%", Only need value.
            <br/>It overwrite contentStyle's width.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({id:"yourModalId",contentStyle:"width:350px;heigth:400px;background-color:#1b78f7;",contentCustomSize:80});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>contentPreSize</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Set modal width by inbuild value.
            <br/>
            <code>df= Bootstrap's default modal width</code>
            <br/>
            <code>sm= small width</code>
            <br/>
            <code>md= medium width</code>
            <br/>
            <code>lg= large width</code>
            <br/>
            <code>fl= full width</code>
        </td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({id:"yourModalId",contentStyle:"width:350px;heigth:400px;background-color:#1b78f7;",contentPreSize:'lg'});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>templateURL</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Pass your HTML modal page template as URL.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalTempId", scope: $scope, templateURL: "./views/modal-template1.html" });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>templateHTML</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Pass your modal page as HTML tags. This required nessery HTML elements for show modal. Refer Bootstrap3 document.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: 'bsmodalTemlHTMLId', scope: $scope, contentPreSize: 'fl', templateHTML:''});</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>bodyTemplateURL</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Pass your modal page's body as template URL.
            <br/>It used default header and footer.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalBodyTempLId", scope: $scope, bodyTemplateURL: './views/modal-template-body.html' });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>bodyTemplate</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Pass your modal page's body as inline HTML.
            <br/>It used default header and footer. Discard when you set
            <code>bodyTemplateURL</code>
        </td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalBodyTempLHTMLId", scope: $scope, bodyTemplate: 'This is a modal body' });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>header</code>
        </td>
        <td>
            <code>default: true</code>
        </td>
        <td>Set modal header visible or not.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, header: false });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>headerTemplate</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Pass your modal header as inline HTML.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, headerTemplate: 'This is a modal header' });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>headerText</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Set header text.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, headerText: "This is header" });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>headerCloseBtn</code>
        </td>
        <td>
            <code>default: true</code>
        </td>
        <td>Show/Hide header close button.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, headerCloseBtn: false });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>footer</code>
        </td>
        <td>
            <code>default: true</code>
        </td>
        <td>Set modal footer visible or not.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, footer: false });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>footerTemplate</code>
        </td>
        <td>
            <code>default: null</code>
        </td>
        <td>Pass your modal footer as inline HTML.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, footerTemplate: 'This is footer' });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>footerCloseBtn</code>
        </td>
        <td>
            <code>default: true</code>
        </td>
        <td>Show/Hide footer close button.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, footerCloseBtn: false });</pre>
        </td>
    </tr>
    <tr>
        <td>
            <code>footerSaveBtn</code>
        </td>
        <td>
            <code>default: false</code>
        </td>
        <td>Show/Hide footer save button.</td>
    </tr>
    <tr>
        <td colspan="3">
            <pre>$bsmodal.modal({ id: "bsmodalModalId", scope: $scope, footerSaveBtn: true });</pre>
        </td>
    </tr>
</table>

### License

Copyright 2013 Sarath Ambegoda. Released under the [MIT License (MIT)](LICENSE).
