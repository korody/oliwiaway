ExternalRuntime.new(
  :name        => "JScript",
  :command     => "cscript //E:jscript //Nologo //U",
  :runner_path => ExecJS.root + "/support/jscript_runner.js",
  :encoding    => 'UTF-16LE' # CScript with //U returns UTF-16LE
)
