// Write a JavaScript program to simplify a given absolute path for a file in Unix-style. 
function simplify_path(main_path) {
    const parts = main_path.split('/');
    const new_path = [];
    let length = 0;
    for (var i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part === '.' || part === '' || part === '..') {
        if (part === '..' && length > 0) {
          length--;
        }
        continue;
      }
      new_path[length++] = part;
    }
  
    if (length === 0) {
      return '/';
    }
  
    let result = '';
    for (var i = 0; i < length; i++) {
      result +=  `/${new_path[i]}` ;
    }
  
    return result;
  }
  console.log(simplify_path("/home/var/./www/../html//sql/"));
  