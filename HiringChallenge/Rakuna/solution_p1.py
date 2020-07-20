_,_,_,f,p,_,_,n=[int(i) for i in input().split()]
e={}
for i in range(n):
    x, z=[int(j) for j in input().split()]
    e[x]=z
while 1:
    cf,cp,d=input().split()
    cf=int(cf)
    cp=int(cp)
    if(cf<0)or(cf==f):
        r=("BLOCK","WAIT")[("RIGHT","LEFT")[p-cp>0]!=d]
    else:
        l=e[cf]
        if l-cp==0:
            r="WAIT"
        else:
            r=("BLOCK","WAIT")[("RIGHT","LEFT")[l-cp>0]!=d]
    print(r)