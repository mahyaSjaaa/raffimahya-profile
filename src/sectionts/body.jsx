import Card from "@/components/card";
import { useState } from "react";
import DetailCard from "@/components/detailCard";
import { datas } from "@/datas";
import Option from "@/sectionts/option";

export default function Body() {
  const [onDetail, setOndetail] = useState('off')
  const [cardId, setCardId] = useState(0)
  const [option, setOption] = useState('coding')

  return (
    <div className="pt-3">
        <p className="text-3xl font-bold font-serif text-amber-100 flex justify-center">Projects</p>
        <Option option={(val) => setOption(val)}/>
        {onDetail === "on" && 
            datas?.filter(data => data.id === cardId).map((data) => (
            <div key={data.id}>
                <DetailCard onClose={(val) => setOndetail(val)} judul={data.judul} file={data.file} carakerja={data.caraKerja} fiturUtama={data.fitur} teknologi={data.teknologi} spesifikasi={data.spesifikasi_sistem} caraKerja={data.caraKerja}/>
            </div>
            ))
        }
        <div className="flex flex-wrap justify-center">
            {option === "coding" ? datas?.filter(data => data.jenis === "coding").map((data) => (
                <div onClick={()=> {setOndetail('on')
                setCardId(data.id)
                }} key={data.id}>
                    <Card nama={data.judul} github={data.github}/> 
                </div>
            )) : datas?.filter(data => data.jenis === "networking").map((data) => (
                <div onClick={()=> {setOndetail('on')
                setCardId(data.id)
                }} key={data.id}>
                    <Card nama={data.judul} github={data.github}/> 
                </div>
            ))}
        </div>
    </div>
  );
}