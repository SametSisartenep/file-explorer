/*
 *  Module dependencies
 */

var fs = require('fs');

fs.readdir(process.cwd(), function ( err, files ) {
  console.log('');

  if (!files.length)
  {
    return console.log(' \033[31m No files tho show!\033[m');
  }

  console.log(' Select which file or directory you want to see\n ');

  function file ( i ) {
    var filename = files[i];

    fs.stat(__dirname + '/' + filename, function ( err, stat ) {
      if (stat.isDirectory())
      {
        console.log('     ' + i + ' \033[36m' + filename + '/\033[m');
      }
      else
      {
        console.log('     ' + i + ' \033[90m' + filename + '\033[m');
      }

      i++;
      if (i == files.length)
      {
        console.log('');
        process.stdout.write(' \033[33m Enter your choice: \033[m');
        process.stdin.resume();
      }
      else
      {
        file(i);
      }
    });
  }

  file(0);
});
