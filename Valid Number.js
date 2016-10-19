var isNumber = function(s) {
    string ='^\\s*[+-]?(\\.[0-9]+|[0-9]+(\\.[0-9]*)?)(e[+-]?[0-9]+)?\\s*$'
     var a = new RegExp(string);
     return a.test(s);
};
