import { Photon } from '@prisma/photon'

let photon: Photon

export function setup () {
  if (!photon) {
    photon = new Photon()
  }

  return photon
}

export default {
  setup
}
