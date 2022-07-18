import { spawn, spawnSync } from 'child_process'
import { writeFile } from 'fs/promises'
import fetch from 'node-fetch'
import path from 'path'

interface Iversion {
    "id": any,
    "type": string,
    "url": string,
    "time": string,
    "releaseTime": string,
    "sha1": string,
    "complianceLevel": number
}

const versions = async () => {
    // const { versions }: { versions: Iversion[] } = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json').then(e => e.json()) as any
    // const baked_versions = versions.filter(a =>
    //     a.type == 'release' && a.id.localeCompare('1.14', undefined, { numeric: true, sensitivity: 'base' }) >= 0
    // )
    // const { downloads } = (await fetch(baked_versions[0].url).then(e => e.json())) as { "downloads": { [key: string]: { sha1: string, url: string } } }
    // console.log(downloads['server'])
    // const serverFile = await fetch(downloads['server'].url).then(x => x.arrayBuffer())
    // await writeFile(path.join(__dirname,'server.jar'), Buffer.from(serverFile))
    // const run = spawn('',`-DbundlerMainClass=net.minecraft.data.Main -jar ${path.join(__dirname,'server.jar')} --reports`.split(' '))
    // run.on('message',(a)=>{
    //     console.log(a.toString())
    // })
    // run.stderr.on('data',(a)=>{
    //     console.log(a.toString())
    // })
}

versions()