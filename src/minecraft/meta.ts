import { spawn, spawnSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { writeFile } from 'fs/promises'
import fetch from 'node-fetch'
import ora from 'ora'
import path from 'path'
import { makeNotExistDir, isExist } from '../utils/file'

interface Iversion {
    "id": any,
    "type": string,
    "url": string,
    "time": string,
    "releaseTime": string,
    "sha1": string,
    "complianceLevel": number
}

// const versions = async () => {
//     // const { versions }: { versions: Iversion[] } = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json').then(e => e.json()) as any
//     // const baked_versions = versions.filter(a =>
//     //     a.type == 'release' && a.id.localeCompare('1.14', undefined, { numeric: true, sensitivity: 'base' }) >= 0
//     // )
//     // const { downloads } = (await fetch(baked_versions[0].url).then(e => e.json())) as { "downloads": { [key: string]: { sha1: string, url: string } } }
//     // console.log(downloads['server'])
//     // const serverFile = await fetch(downloads['server'].url).then(x => x.arrayBuffer())
//     // await writeFile(path.join(__dirname,'server.jar'), Buffer.from(serverFile))
//     // const run = spawn('',`-DbundlerMainClass=net.minecraft.data.Main -jar ${path.join(__dirname,'server.jar')} --reports`.split(' '))
//     // run.on('message',(a)=>{
//     //     console.log(a.toString())
//     // })
//     // run.stderr.on('data',(a)=>{
//     //     console.log(a.toString())
//     // })
// }

// versions()

export const load_commands = async (minecraft_version: string, root: string) => {
    const mcb_module = path.join(root, '.mcb_module')
    const mcb_module_mcb = path.join(mcb_module, '.mcb')
    const mcb_resource = path.join(mcb_module_mcb, 'resource')
    const f_path = path.join(mcb_resource,'commands_' + minecraft_version.replace(/\./g, '_') + '.json')
    let load
    if (!isExist(f_path)) {
        try {
            load = await fetch(`https://raw.githubusercontent.com/misode/mcmeta/${minecraft_version}-summary/commands/data.min.json`).then(a => a.json())
            makeNotExistDir([mcb_module, mcb_module_mcb, mcb_resource])
            writeFileSync(f_path, JSON.stringify(load))
        } catch (error) {

        }
        return false
    } else {
        const f = readFileSync(f_path, 'utf-8')
        load = JSON.parse(f)
    }
    return load
}

export const load_version = async (minecraft_version:string, root: string) => {
    const mcb_module = path.join(root, '.mcb_module')
    const mcb_module_mcb = path.join(mcb_module, '.mcb')
    const mcb_resource = path.join(mcb_module_mcb, 'resource')
    const f_path = path.join(mcb_resource, minecraft_version.replace(/\./g, '_') + '.json')
    let load
    if (!isExist(f_path)) {
        try {
            load = await fetch(`https://raw.githubusercontent.com/misode/mcmeta/${minecraft_version}-summary/version.json`).then(a => a.json())
            makeNotExistDir([mcb_module, mcb_module_mcb, mcb_resource])
            writeFileSync(f_path, JSON.stringify(load))
        } catch (error) {
            
        }
        return false
    } else {
        const f = readFileSync(f_path, 'utf-8')
        load = JSON.parse(f)
    }
    return load
}