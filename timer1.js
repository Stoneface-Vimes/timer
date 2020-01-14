const input = process.argv.slice(2)
if (input.length > 0) {
  for (let arg of input) {
    if (arg >= 0) { 
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(arg)*1000)
    }
  }
}