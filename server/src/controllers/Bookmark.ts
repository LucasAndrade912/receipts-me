import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

import set from 'date-fns/set'

export class Bookmark {
  async getAllBookmarks(request: Request, response: Response) {

    const allBookmarks = await prismaClient.bookmarked.findMany()

    return response.json(allBookmarks)
  }


  async getAllBookmarkedFromPost(request: Request, response: Response) {
    const { cod_recipe } = request.params


    const allBookmarksOfPost = await prismaClient.bookmarked.findMany({
      where: {
        cod_recipe: cod_recipe
      }
    })

    return response.json(allBookmarksOfPost)
  }

  async getAllBookmarksFromUser(request: Request, response: Response) {
    const { google_id } = request.params

    const allBookmarkFromUser = await prismaClient.bookmarked.findMany({
      where: {
        google_id: google_id
      }
    })

    return response.json(allBookmarkFromUser)
  }

  async createBookmark(request: Request, response: Response) {
    const {
      google_id,
      cod_recipe
    } = request.body


    const bookMarked = await prismaClient.bookmarked.create({
      data: {
        date_bookmarked: set(new Date(), { hours: 1, minutes: 10 }),
        User: {
          connect: {
            google_id
          }
        },
        Recipe: {
          connect: {
            cod_recipe
          }
        }
      },
    })

    return response.json(bookMarked)
  }
}
