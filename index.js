var contact = Array.from(document.querySelectorAll('input')).reduce((acc, input, textarea) => ({...acc, [input.id]: input.value, input[type=text], textarea}), {});
