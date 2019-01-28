export default {
    sideBar:{
        main:'MENU',
        wallet:'Wallet',
        trade:'Transations',
        tradeInfor:'Transaction Information',
        contract:'Contracts',
        more:'More',
        setting:'Settings',
        help:'Help',
        application:'DAPPS',
        validatorNode:'Block Producers',
        enter:'Enter'
    },
    wallet:{
        Wallets:'Wallets',
        walletTitle:'WALLETS',
        individual:'Classic Wallet',
        shared:'Joint Wallet',
        totalBalance:'BALANCE',
        balance:'Balance',
        add:'Add Classic wallet',
        createWallet:'Create Wallet',  // key由create改为createWallet
        importW:'Add Wallet',
        send:'Send',
        accept:'Receive',
        copyAddress:'Copy',
        more:'More',
        exportKeystore:'Export keystore',
        viewPrivate:'View private key',
        modifyPsw:'Change password',
        deleteWallet:'Delete wallet',
        modify:'Authentication',
        importTxt:'You are about to export the  keystore file',
        viewPrivateTxt:'You are about to view private key',
        modifyPswTxt:'You are about to change password',
        deleteTxt:'You are about to delete wallet',
        walletAddress:'Wallet address',
        walletAddress0x:"Wallet address 0x0000000...",  // add
        enterPsw:'Wallet password',
        walletpubKey:'Public Key',  // add
        walletPrivate:'Private key',
        enterOldPsw:'Old wallet password',
        enterNewPsw:'Set wallet password(at least 6 characters)',  // 原value为New wallet password(No less than 6 digits)
        enterNewPswHint:'The password must be at least 6 characters',
        repeatPsw:'Repeat new password',
        warning:'Warning',
        warningTxt:'You are on the PlatON Test Network. Be careful not to transfer real funds to this address.',
        warningContTxt:'You are on the PlatON Test Network. Be careful not to transfer real funds to this address.',
        copySuccess:'Copied to clipboard',
        copyFail:'Copy content failed',
        cannotTrans:'Insufficient balance, unable to pay transaction fees',
        cannotTrans2:'Insufficient balance！',
        deleteSuccess:'Delete wallet successfully',
        pswError:'Password error！',
        modifyPswSuccess:'Change password successfully',
        oldPswError:'Old password error！',
        // author hufu 2018-11-12
        individualWalletName:'Name of Classic wallet',
        pleaseRememberPassword:'Please remember your wallet password. The server will not store your password!',
        createIndividualWallet:'Create Classic Wallet',
        createSharedWallet:'Create Joint Wallet',
        AddSharedWallet:'Add Joint Wallet',
        importIndividualWallet:'Import Classic Wallet',
        IndividualWalletSuccess:'Create Classic Wallet  Successfully',
        name:'Label ',
        address:'Address ',
        pubKey:'Pubilc Key ',
        signature:'Signature Scheme ',
        prikey:'Private Key ',
        tipSaveJson:'Please make a backup of these data and save the .json file',
        downloadJson:'Download.json',
        finish:'OK',
        hex:'Private Key(64 Hex)',
        mnemonicPhrase:'Mnemonic Phrase',
        walletName:'Name of Classic wallet',
        inputPKHint:'Please enter private key with 64byte hex format',
        import:'Import',
        browse:'Browse',
        unselectedFile:'Please select a file',
        decryptKeystore:'Password to decrypt keystore(.json)',
        inputPhraseHint:'Please enter a wallet mnemonic phrase and use a space to separate each of eth words',
        QRCode:'Wallet QR Code',
        // 错误提示
        walletNameRequired:'The wallet label is required',
        walletPswRequired:'The wallet password is required',
        PKRequired:'The private key is required',
        NodePKRequired:'Node private key is required',
        NodePKillegal:'Node private key is illegal',
        NodeIPRequired:'Node IP is required',
        NodeIPillegal:'Node IP is illegal',
        NodePortRequired:'Node port is required',
        NodePortillegal:'Node port is illegal',
        PKlength:'The private key length must be 64',
        PhraseRequired:'The Mnemonic phrase is required',
        fileRequired:'The keystore file is required',
        netNameEmpty:'Network name  is required',
        netNameRepeat:'The network name cannot be repeated',
        netNameIllegal:'Invalid network name',
        blockSpacingEmpty:'Block interval is required',
        blockSpacingIllegal:'Invalid Block interval',
        repeatPswP:'Please repeat your wallet password',
        pswNoMatch:'Please match the repeat password',
        initFailed:'Initialization or node startup failed',
        paramsEmpty:'The parameter cannot be empty',
        notUploadAgain:'Do not upload again',
        wasmFormat:'Upload files only in wasm format!',
        estimateFailed:'Failed to estimate gas value',
        selectHint:'please select',
        defaultNoData:'no data',
        //发送
        sendFunds:'Send Funds',
        from:'FROM',
        to:'TO',
        amountSend:'AMOUNT',
        amountHint:'Send amount',
        wantTo:'you want to send',
        selectFee:'SELECT FEE',
        cheaper:'Cheaper',
        faster:'Faster',
        estimatedTime:'Estimated transaction confirmation time',
        advance:'ADVANCED OPTIONS',
        advanceHint:'You can add extra data to send along with your transaction. If you don \'t know what this is then don \'t touch it or bad things may happen.',
        total:'TOTAL',
        sendTransaction:'send Transaction',
        amount:'Amount',
        fee:'Fee',
        input:'',
        walletPsw:'Wallet password',
        allWallet:'All Wallet',
        createShareWallet:'Create Wallet',
        addShareWallet:'Add Wallet',
        tip1:'All Classic wallet balance are 0, unable to pay transaction fees！',
        tip2:'Create Classic wallet first ,and Transfer to assets',
        incorrectAddress:'Invalid Receive address',
        insufficientBalance:'Insufficient balance',
        incorrectValue:'Invalid value',
        transactionFailed:'Transaction failed!',
        invalidSignatures:'Personal signatures are unavailable or wallets do not exist',
        invalidPrivatekey:'Import failed! Invalid Private Key',
        invalidWord:'Import failed! Invaild Mnemonic phrase',
        invalidFile:'Import failed! The file cannot be parsed',
        alreadyExits:'Classic wallet  already exists',
        importSuccess:'Import Classic wallet Successfully',
        importFail:'Import Classic wallet failed',
        viewAbi:'View Interface',
        sharedOwners:'Joint Owner',
        walletOwner:'Wallet Owner',
        interfaceCode:'Interface Code',
        sharedWalletName:'Name of Joint Wallet',
        enterSharedAddr:'Joint Wallet Address',
        addShare:'Add',
        nonSharedName:'The Joint Wallet label is required',
        nonSharedAddr:'The Joint Wallet address is required',
        inVaildSharedAddr:'Invaild Classic Wallet address',
        addShareFail:'Failed to add! Address does not exist',
        addShareOwnerFail:'Failed to add! The Owner number is 0',
        shareAlreadyExits:'Joint wallet  already exists',
        addShareSuccess:'Add Joint wallet Successfully',
        requiredNum:'Required Signatures',
        deployContract:'Create Contract',
        newShareTip1:'The owner name and Classic wallet address is required',
        newShareTip2:'The owner name is required',
        newShareTip3:'Classic wallet address is required',
        addrExits:'Same Classic wallet address',
        createShareSuccess:'Transaction sent!',
        createShareFail:'Transaction failed to send!',
        sendToSelf:'Can`t send to itself',
        isShareAddress:'Cannot enter Joint Wallet address',
        copy:'Copy',
        ownerAccount:'Name',
        ownerAddress:'Classic Wallet address'
    },
    nodeSync:{
        syncStatus:'SYNC STATUS',
        Peers:'Connected nodes',
        Blocks:'Unsynced blocks',
    },
    trade:{
        record:'Transactions',
        pendingTrade:'Pending Transactions',
        noRecord:'No transactions yet',
        loadMore:'Show More...',
        // author hufu 2018-11-13
        sent:'Send',
        contractCreation:'Contract creation',
        contractCreation2:'Create contract',
        contractExecution:'Contract execution',
        mpc:'MPC',
        finished:'Completed',
        toBeSigned:'To be signed',
        failed:'Failed',
        pending:'Pending',
        confirm:'Confirm',
        reject:'Reject',
        transactionInfo:'Transaction Information',
        type:'Type',
        tradeTime:'TimeStamp',
        tradeHash:'TxHash',
        tradeStatus:'TxReceipt Status',
        sum:'Value',
        from:'From',
        to:'To',
        fee:'Actual Tx Cost/Fee',
        gas:'Gas Used By Transaction',
        energon:'Price',
        block:'Block Height',
        TXD:'Input Data',
        allTypes:'All Types',
        others:'Others',
        noData:'no data',
        selOwner:'Select Joint Owners',
        jointWalletExecution:'Joint Wallet Execution ',
        createValidator:'Register Producer',
        increaseStake:'Increase Stake',
        reduceStake:'Reduce Stake',
        redeemStake:'Redeem Stake',
        revokePending:'Producer cancellation in process',
        transactionSent:'Transaction Sent!'
    },
    settings:{
        network:'Network',
        mainNet:'PlatON MainNet',
        testNet:'PlatON TestNet',
        priNet:'PlatON private network',
        networkConfig:'Network Configuration',
        joiningNet:'JOINING NETWORK',
        netSet:'The network is successfully set to the ',
        networkSet:' network',
        stratNet:'Strat a private network',
        failure:'failure',
        fail:'Fail',
        mainTitle:'Join the PlatON Mainnet',
        mainContent:'For common users to enter.Mainnet is the production network,that carry real PlatON transactions',
        testTitle:'Join the PlatON Testnet',
        testContent:'For developer to enter.Testnet is an alternative PlatON blockchain,and to be used to testing',
        priTitle:'Create the PlatON Private-net',
        priContent:'Create a local private network for developers to learn, and test functions.',
        lang:'Language',
        en:'English',
        zh:'Chinese',
        filePath:'Save keystore file path',
        path:'Path',
        change:'Change',
        about:'About',
        system:'System',
        check:'Check for Updates',
        applyTest:'PlatON TestNet，Testing ATP Application',
        apply:'Apply',
        community:'Community',
        customNet:{
            createNet:'Create Private Network',
            block:'Genesis Block',
            netName:'Network Name',
            netNameHint:'Only letters and numbers are supported',
            consensus:'Consensus',
            interval:'Block interval',
            cancel:'Cancel',
            create:'Create Genesis Block',
            creating:'Creating',
            createWallet:'Create Coinbase Wallet',
            walletName:'Wallet Name',
            password:'Password',
            rePassword:'Repeat Password',
            createAndWrite:'Create Wallet',
            address:'Address',
            tip:'Please make a backup of wallet ',
            tip2:'.json file',
            download:'Download.json',
            backUpKey:'Backup wallet',
            nodeaddress:'Node Address',
            node:'Node',
            priK:'Private Key',
            pubK:'Public Key',
            IP:'IP',
            port:'Port',
            addNode:'Add Node',
            startNode:'Init and Start Node',
            successfully:'created successfully',
            folder:'Data Folder',
            forOther:'For other nodes join the private chain, please export the static node file',
            export:'Export',
            // 加入PlatON私有网络
            addNet:'Add Private Network',
            importFiles:'Import static node files',
            importFilesHint:'Import the created private chain static node file(static_nodes.json)',
            next:'Next',
            filesReq:'Static node files is required',
            cannotResolved:'Node information cannot be resolved',
            nodeAddress:'Node Address:',
            nodePK:'Node Private Key:',
            nodeIP:'Node IP:',
            nodePort:'Node Port:',
            addNode:'Add and Start Node',
            generate:'Generate',
            getIp:'Get'
        }
    },
    form:{
        nonPsw:'The Password is required',
        create:'Create',
        cancel:'Cancel',
        submit:'Submit', // add
        sure:'Ok',
        nonOldPsw:'The old password is required',
        less6:'The password must be at least 6 characters',
        nonRepPsw:'The password comfirmation is required',
        disMatch:'Please match the repeat password',
        wrongPsw:'Password error',
        next:'Next',
        back:'Back',
        loading:'Loading...'
    },
    contracts:{
        contracts:'Contracts',
        contractsInfor:'Contract Information',
        addCont:'Add Contract',
        deployCont:'Deploy Contract',
        watchCont:'Add Contract',
        addWatchCont:'Add Watch Contract',
        from:'FROM',
        fromHint:' ',
        amount:'AMOUNT',
        amountHint:'Send amount 0.00',
        wantSend:'You want to send',
        contByte:'Contract Bytecode',
        contByteEmpty:'Contract Bytecode is required',
        contNameEmpty:'Contract name is required',
        import:'Import',
        drag:'drag bytecode file',
        contABI:'Contract ABI(Interface)',
        contABIEmpty:'Contract ABI is required',
        contABIHint:'Compile output ABI(Interface)',
        contABIinvalid:'Contract ABI invalid',
        selectFee:'SELECT FEE',
        within:'probably within ',
        second:'s',
        withinmins:'mins',
        within30s:'小于30s',
        within5mins:'小于5分钟',
        within15mins:'小于15分钟',
        total:'TOTAL',
        deploy:'DEPLOY',
        contractInfo:'CONTRACT INFO',
        copy:'Copy',
        copyContract:'Copy',
        interface:'Interface',
        contractInterface:'Contract Interface',
        executeCont:'EXECUTE CONTRACT',
        executeContCap:'Execute Contract',
        selectFunc:'select a function',
        executeFrom:'Execute from',
        execute:'EXECUTE',
        walletEmpty:'Create Classic wallet first ,and Transfer to assets',
        balanceEmpty:'All Classic wallet balance are 0, unable to pay transaction fees！',
        inputFormat:'The format of sending quantity input is wrong, please input again',
        deployFail:'Create Contract Failed',
        file:'file',
        createCont:{
            creatCont:'Creat Contract',
            amount:'Amount',
            fee:'Fee',
            advanceOpt:'ADVANCED OPTIONS',
            inputHint:'Please enter wallet password',
            cancel:'Cancel',
            submit:'Submit'
        },
        watchContract:{
            contName:'CONTRACT NAME',
            nameHint:'Please enter the contract name',
            contAddress:'CONTRACT ADDRESS',
            contAddressEmp:'The contract address is is required',
            contAddressExist:'Contract address already exists',
            contAddressInvalid:'Failed to add! The contract address does not exist',
            contAddressError:'Vaild contract address',
            addressHint:'Please enter the contract address',
            contABI:'CONTRACT ABI(Interface)',
            contABIHint:'Please Compile output ABI(Interface)',
            contABIEmp:'The contract ABI(Interface) is is required',
            contABIInvalid:'The contract interface cannot be resolved',
            cancel:'Cancel',
            add:'Add'
        }
    },
    application:{
        nodeName:'Node Name',
        payWallet:'Payment wallet',
        stakeAmount:'Stake Amount',
        stakeNumber:'Stake Amount 0.00',
        stakeAmountNull:'The Stake Amount is required',
        maximumAmount:'Current maximum Stake:',
        minimumAmount:'Current minimum Stake:',
        totalAmount:'Total Stake:',
        expectedRanking:'Expected Staked Ranking:',
        agree:'I know and agree to',
        rule:'Validator Node Rules',
        rule2:'Validator Node Rules',
        pay:'Pay',
        increaseFail:'Transaction sending failed',
        noResult:'You have not registered block producers yet',
        apply:'Block Producer Register',
        understand:'Learn about',
        applyTime:'Join time',
        status1:'Revoked',
        status2:'Revoked',
        status3:'Validator',
        status4:'Standby',
        status5:'Candidate',
        staked:'Staked',
        fee:'Reward Ratio',
        ranking:'Staked Ranking',
        unboundStake:'Unbound Stake',
        redeem:'Redeem',
        increase:'Increase Stake',
        reduce:'Reduce Stake',
        pending:'Pending',
        revoke:'Revoke Producer',
        basicInfo:'Basic Information',
        nodeInfo:'Node Info',
        nodeUrl:'Node URL',
        nodePublicKey:'Node Public Key',
        nodePublicKeyID:'Node ID', //公钥改id只适用于节点竞选和投票
        nodeWallet:'Node Wallet',
        nodeIntro:'Node Introduction',
        profitPlan:'Profit Plan',
        ratio:'Reward Ratio',
        institutionalInfo:'Institutional info',
        orgName:'Name',
        orgNet:'Website',
        prompt:'Confirm Redeem Unbound Stake',
        promptTxt:'After submitted, the Stake will be returned to your node wallet.',
        walletAddress:'Wallet Address',
        warn:'Confirm Revoke Producer',
        warnText:'After Revoked, the Staked is expected to be lifted after 1 days!',
        noWallet:'Please create a wallet first',
        noBalance:'Insufficient wallet balance, unable to initiate an application',
        account:'Account',
        accountRule:'Set the account name(6-30 digit alphanumeric characters are underlined,the first character needs to start with a letter)',
        logo:'Logo',
        logoRule:"(The image size can't be higher than 1M, support png\jpeg\jpg)",
        selFile:'File...',
        logoNull:'The logo is required',
        nodeUrl2:'Node URL',
        nodeIntroTxt:'Briefly introduce node deployment information,server configuration information,and future node planing',
        nodeWallet2:'Node Wallet',
        nodeWallet2Txt:'(for receiving block revenue and redemption deposit)',
        ratio2:'Reward Ratio',
        ratio2Txt:'(For Voter incentive)',
        notBeBelow:'The Stake Amount is not less than',
        numberTip1:'Note: The Staked cannot be lower than the default value of ',
        numberTip2:', and the 200th Validator Node Staked;',
        after200:'After 200',
        submitApply:'Submit',
        noFile:'No files were selected',
        accountNull:'The Account is required',
        accountRule2:'The account name supports 6-30 digit alphanumeric underscores. The first character needs to start with a letter',
        hostNull:'The Node URL is required',
        invalidHost:'Invaild Node URL',
        publicKeyNull:'The Node Public Key is required',
        invalidPublicKey:'Invaild Node Public Key',
        introNull:'The Node introduction is required',
        invalidIntro:' Node profile needs to meet 10-200 characters',
        ratioNull:'The Reward Ratio is required',
        invalidRatio:'Invaild Reward Ratio(0-100)',
        orgNameNull:'The institutional name is required',
        invalidOrgName:'Institution name no more than 60 characters',
        orgNetNull:'The institutional Website is required',
        invalidOrgNet:'Invalid Website',
        logoInvalid:'The logo upload failed. Please ensure that the size format meets the requirements.',
        cannotConnect:'Node URL cannot be connected',
        nodeUrlExit:'Node address already exists',
        cannotSubmit:'The  Staked Ranking is expected to be less than 200， the application cannot be submitted.',
        reduceStake:'Reduce Amount',
        remainingStake:'Remaining Stake:',
        reduceAmount:'Reduce Stake amount 0.00',
        after200Warn:'Determine the operation?',
        after200Tip:'After reduction, the Staked Ranking below 200, the node will be eliminated, all Staked will be lifted.',
        myNode:'My Producer',
        enterAccount:'Please enter the account name query',
        status:'Status',
        position:'Location',
        noCandidate:'No campaign nodes',
        sortBy1:'Default',
        sortBy2:'Staked Ranking',
        sortBy3:'Reward Ratio',
        sortBy4:'Location',
        joinAgain:'Rejoin',
        applyWaiting:'Registration Submission',
        validatorNode:'Block Rroducers',
        myValidatorNode:'My Producer',
        cannotBeLess:'The Reduce Amount cannot be less than 10% of Staked',
        inCannotBeLess:'The Increase Amount cannot be less than 10% of the current Staked',
        ApCannotBeLess:'The Stake Amount cannot be less than 110% of the 200th Validator Node Staked',
        createValidator:'Register Block Producer',
        increaseStakeConf:'Increase Stake Confirmation',
        reduceStakeConf:'Reduce Stake Confirmation',
        withdrawStakeConf:'Withdraw Stake Confirmation',
        quitValidatorConf:'Revoke Producer Confirmation',
        OutOfRange:'Reduce Amount cannot exceeds the existing staked amount',
        stakeNull:'Reduce Amount is requried',
        pendingRedeem:'Pending'
    }
};
