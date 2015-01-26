require 'sinatra'

set :public_dir, Proc.new { File.join(root, "js") }


  get '/' do
    erb :index
  end



