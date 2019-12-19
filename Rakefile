require 'html-proofer'

desc 'run htmlproofer, rspec if .rspec file exists'
task :test do
  opts = {
    check_external_hash: true,
    allow_hash_href: true,
    check_html: true,
    empty_alt_ignore: true,
    only_4xx: true,
    verbose: true
  }
  HTMLProofer.check_directory('.', opts).run
end
