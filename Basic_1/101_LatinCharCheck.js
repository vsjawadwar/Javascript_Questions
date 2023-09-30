// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions. 
function test_string(input_str) {
    const is_lower_case = symbol => {
      if ('a' <= symbol && symbol <= 'z') {
        return true;
      }
      return false;
    };
  
    const is_upper_case = symbol => {
      if ('A' <= symbol && symbol <= 'Z') {
        return true;
      }
      return false;
    };
  
    const is_first_char_lower = is_lower_case(input_str[0]);
    const is_first_char_upper = is_upper_case(input_str[0]);
  
    if (!(is_first_char_lower || is_first_char_upper)) {
      return false;
    }
  
    for (let i = 1; i < input_str.length; i++) {
      if (i % 2) {
        if (is_lower_case(input_str[i]) === is_first_char_lower ||
          is_upper_case(input_str[i]) === is_first_char_upper) {
          return false;
        }
      } else {
        if (is_lower_case(input_str[i]) !== is_first_char_lower ||
          is_upper_case(input_str[i]) !== is_first_char_upper) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  console.log(test_string('xYr'));   
  console.log(test_string('XXyx'));
  