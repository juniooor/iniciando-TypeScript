let isactivate: boolean;

isactivate = true;

//...


function statusUser(status:
    boolean) : string {
    if ( status) {
        return 'Usuario está ativo'
    }else {
        return 'Usuario não está ativo'
    }
}

statusUser(true);