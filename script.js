const mark={
    fullName:'mark Miller',
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
    }
};
mark.calcBMI();
console.log(mark.BMI);

const john={
    fullName:'john Smith',
    mass:95,
    height:1.88,
    calcBMI:function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
    }
};
john.calcBMI();
console.log(john.BMI);

if(mark.BMI>john.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI})
        is higher than ${john.fullName}'s BMI (${john.BMI})`);
}else if(john.BMI>mark.BMI){
    console.log(`${john.fullName}'s BMI (${john.BMI})
        is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}



































