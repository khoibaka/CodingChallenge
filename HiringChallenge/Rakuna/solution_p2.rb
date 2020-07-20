STDOUT.sync = true
_,w,_,e,o,_,_,n=gets.split.map(&:to_i)
l={}
n.times{f,x=gets.split.map(&:to_i);l[f]=x}
loop{f,c,d=gets.split;f,c=f.to_i,c.to_i;x= f==e ? o : l[f];puts (c<1 || c>=w-1) ? "BLOCK" : "WAIT"}