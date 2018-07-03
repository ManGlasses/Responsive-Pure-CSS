var gulp = require("gulp")

var browserSync = require("browser-sync")

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "./"
    }
  })
})

gulp.task("default", ["browser-sync"], function () {
  gulp.watch(["index.html"], browserSync.reload)
  gulp.watch(["css/*.css"], browserSync.reload)
})
