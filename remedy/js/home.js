(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var addClass, removeClass, selectElem, selectOnChange, _i, _len, _ref;

addClass = function(elem, className) {
  if (-1 === elem.className.indexOf(className)) {
    return elem.className += ' ' + className;
  }
};

removeClass = function(elem, className) {
  return elem.className = elem.className.replace(className, '');
};

selectOnChange = function() {
  if (this.selectedIndex) {
    return removeClass(this, 'placeholder');
  } else {
    return addClass(this, 'placeholder');
  }
};

_ref = document.getElementsByTagName('select');
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  selectElem = _ref[_i];
  selectElem.onchange = selectOnChange;
  if (!selectElem.selectedIndex) {
    addClass(selectElem, 'placeholder');
  }
}


/*
setTimeout ->
	for elem in document.getElementsByClassName 'postpadding'
		console.log elem
		elem.style.paddingRight = '10px';
, 200
 */



},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy9EYXRhL25mcy96ZnMtc3R1ZGVudC0yL3VzZXJzLzIwMTQvZGRhLXNpbHYvZ2l0aHViL3JlbWVkeS93ZWJzaXRlL3NyYy9jb2ZmZWUvaG9tZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBLGlFQUFBOztBQUFBLFFBQUEsR0FBVyxTQUFDLElBQUQsRUFBTyxTQUFQLEdBQUE7QUFDVixFQUFBLElBQUcsQ0FBQSxDQUFBLEtBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFmLENBQXVCLFNBQXZCLENBQVQ7V0FDQyxJQUFJLENBQUMsU0FBTCxJQUFrQixHQUFBLEdBQU0sVUFEekI7R0FEVTtBQUFBLENBQVgsQ0FBQTs7QUFBQSxXQUlBLEdBQWMsU0FBQyxJQUFELEVBQU8sU0FBUCxHQUFBO1NBQ2IsSUFBSSxDQUFDLFNBQUwsR0FBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFmLENBQXVCLFNBQXZCLEVBQWtDLEVBQWxDLEVBREo7QUFBQSxDQUpkLENBQUE7O0FBQUEsY0FPQSxHQUFpQixTQUFBLEdBQUE7QUFDaEIsRUFBQSxJQUFHLElBQUMsQ0FBQSxhQUFKO1dBQ0MsV0FBQSxDQUFZLElBQVosRUFBZSxhQUFmLEVBREQ7R0FBQSxNQUFBO1dBR0MsUUFBQSxDQUFTLElBQVQsRUFBWSxhQUFaLEVBSEQ7R0FEZ0I7QUFBQSxDQVBqQixDQUFBOztBQWFBO0FBQUEsS0FBQSwyQ0FBQTt3QkFBQTtBQUNDLEVBQUEsVUFBVSxDQUFDLFFBQVgsR0FBc0IsY0FBdEIsQ0FBQTtBQUNBLEVBQUEsSUFBRyxDQUFBLFVBQVcsQ0FBQyxhQUFmO0FBQ0MsSUFBQSxRQUFBLENBQVMsVUFBVCxFQUFxQixhQUFyQixDQUFBLENBREQ7R0FGRDtBQUFBLENBYkE7O0FBa0JBO0FBQUE7Ozs7OztHQWxCQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmFkZENsYXNzID0gKGVsZW0sIGNsYXNzTmFtZSkgLT5cblx0aWYgLTEgPT0gZWxlbS5jbGFzc05hbWUuaW5kZXhPZiBjbGFzc05hbWVcblx0XHRlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWVcblxucmVtb3ZlQ2xhc3MgPSAoZWxlbSwgY2xhc3NOYW1lKSAtPlxuXHRlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UgY2xhc3NOYW1lLCAnJ1xuXG5zZWxlY3RPbkNoYW5nZSA9IC0+XG5cdGlmIEBzZWxlY3RlZEluZGV4XG5cdFx0cmVtb3ZlQ2xhc3MgQCwgJ3BsYWNlaG9sZGVyJ1xuXHRlbHNlXG5cdFx0YWRkQ2xhc3MgQCwgJ3BsYWNlaG9sZGVyJ1xuXG5mb3Igc2VsZWN0RWxlbSBpbiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSAnc2VsZWN0J1xuXHRzZWxlY3RFbGVtLm9uY2hhbmdlID0gc2VsZWN0T25DaGFuZ2Vcblx0aWYgIXNlbGVjdEVsZW0uc2VsZWN0ZWRJbmRleFxuXHRcdGFkZENsYXNzIHNlbGVjdEVsZW0sICdwbGFjZWhvbGRlcidcblxuIyMjXG5zZXRUaW1lb3V0IC0+XG5cdGZvciBlbGVtIGluIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJ3Bvc3RwYWRkaW5nJ1xuXHRcdGNvbnNvbGUubG9nIGVsZW1cblx0XHRlbGVtLnN0eWxlLnBhZGRpbmdSaWdodCA9ICcxMHB4JztcbiwgMjAwXG4jIyMiXX0=
