---
title: Chunk Types
id: chunk-types
---

Swarm is home to many types of chunks, but these can be categoried into 4 broad categories. Read [The Book of Swarm](https://gateway.ethswarm.org/bzz/latest.bookofswarm.eth/) for more information on how swarm comes together.

## Content Addressed Chunks

Content addressed chunks are chunks whose addresses determined by the BMT hashing algorithm. This means you can be sure that all content addressed chunks content is already verified - no more need to check md5 hashes of your downloaded data!

:::warning
To be able trust your data, you must run your own Bee node that automatically verifies data, using gateways puts your trust in the gateway operators. 
:::

## Trojan Chunks

Trojan chunks are a special version of content addressed chunks that have been 'mined' so that their natural home is in a particular area of the swarm. If the destination node is in the right neighbourhood, it will be able to receive and decrypt the message. See [PSS](/docs/dapps-on-swarm/pss) for more information, or check out the [bee-js](/docs/dapps-on-swarm/bee-js) bindings.

## Single Owner Chunks

Single Owner Chunks are distinct from Trojan and Content Addressed Chunks and are the only other type of chunk which is allowed in the Swarm. These chunks represent part of the swarm's address space which is reserved just for your personal Ethereum key pair! Here you can write whatever you'd please. Single Owner Chunks are the technology that powers Swarm's [feeds](/docs/dapps-on-swarm/feeds) but they are capable of much more! Look out for more chats about this soon and for more info, read [The Book of Swarm](https://gateway.ethswarm.org/bzz/latest.bookofswarm.eth/).

## Custom Chunk Types

Although all chunks must satisfy the constraints of either being addressed by the BMT hash of their payload, or assigned by the owner of a Ethereum private key pair, so much more is possible. How else can you use the DISC to distribute and store your data? We're excited to see what you come up with! 💡 

Share your creations in the [#develop-on-swarm](https://discord.gg/C6dgqpxZkU) channel of our [Discord Server](https://discord.gg/wdghaQsGq5).